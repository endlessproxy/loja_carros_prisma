import { Router } from "express";
import { CreateUser } from "../controllers/signUpController";

export const router = Router();

router.post("/signup", CreateUser)