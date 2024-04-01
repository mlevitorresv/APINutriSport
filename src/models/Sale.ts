import Joi from "joi";
import { PayTypes } from "../util/dataTypes";

export interface SaleInterface{
    customer: string
    employee: string
    products: string[]
    date: Date
    payMethod: string
    invoiceNumber: number
}

export const productSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    customer: Joi.string().required(),
    employee: Joi.string().required(),
    products: Joi.array().items(Joi.string()).required(),
    date: Joi.date().required(),
    payMethod: Joi.string().valid(...Object.values(PayTypes)).required(),
    invoiceNumber: Joi.date().required(),
})