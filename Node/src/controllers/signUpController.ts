import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { User } from "../models/UserModel";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function CreateUser(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User(name, email, hashedPassword, salt);

        const createdUser = await prisma.user.create({
            data: {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                salt: newUser.salt
            }
        });

        res.status(201).json(createdUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    } finally {
        await prisma.$disconnect();
    }
}