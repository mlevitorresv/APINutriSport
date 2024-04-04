import express, { Request, Response } from "express";
import { generateToken } from "../services/login";
import { executeQuery } from "../config/db";
const bcrypt = require('bcrypt')

import dotenv from "dotenv";
dotenv.config();


export const loginRouter = express.Router();

loginRouter.post('/', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const data: any = await executeQuery("SELECT * FROM employees WHERE email = ?", [email]);

    if(data[0].length === 0)
        return res.status(401).json({ error: "Unauthorized: Invalid credentials" })
    
    await bcrypt.compare(password, data[0][0].password, (err: Error, result: boolean) => {
        if(err)
            return err;
        if(!result)
            return res.status(401).json({ error: "Unauthorized: Invalid credentials" })
        
        const userToken = generateToken(email);
        if (userToken)
            return res.json({ token: userToken })
        
        return res.status(500).json({error: "Token was not generated, internal error"})
        
    })
    
})
