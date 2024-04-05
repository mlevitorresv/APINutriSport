import express, { Request, Response } from "express";
import { generateToken } from "../services/login";
const bcryptjs = require('bcryptjs')

import dotenv from "dotenv";
import { EmployeeInterface, EmployeeModel } from "../models/Employee";
dotenv.config();


export const loginRouter = express.Router();

loginRouter.post('/', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const data = await EmployeeModel.findOne({ email: email})

    if(!data)
        return res.status(401).json({ error: "Unauthorized: Invalid credentials" })
    
    await bcryptjs.compare(password, data.password, (err: Error, result: boolean) => {
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
