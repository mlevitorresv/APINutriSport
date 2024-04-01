import Joi from "joi";
import { CategoriesSuppliersTypes } from "../util/dataTypes";

export interface SupplierInterface{
    name: string
    postalCode: number
    phone: string
    email: string
    web: string
    category : string
}

export const productSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().required(),
    postalCode: Joi.number().min(5).max(5).required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    web: Joi.string().required(),
    category : Joi.string().valid(...Object.values(CategoriesSuppliersTypes)).required()
})