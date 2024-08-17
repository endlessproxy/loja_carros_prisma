import express from "express";
import dotenv from "dotenv";
import { router as defaultRoute } from "./routes/defaultRoute";
import { router as signUpRoute } from "./routes/signUpRoute";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/", defaultRoute);
app.use("/", signUpRoute);

export default app;