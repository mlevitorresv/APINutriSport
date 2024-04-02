import express, { Request, Response } from "express";
import { generateToken } from "../services/login";
import { executeQuery } from "../config/db";

import dotenv from "dotenv";
dotenv.config();


export const loginRouter = express.Router();

loginRouter.post('/', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await executeQuery("SELECT * FROM employees WHERE email = ? AND password = ?", [email, password]);
    
    if(result){
        const userToken = generateToken(email);
        if (userToken){
            return res.json({ token: userToken })
        }
        return res.status(500).json({error: "Token was not generated internal error"})
    }
    return res.status(401).json({ error: "Unauthorized: Invalid credentials" })
})
