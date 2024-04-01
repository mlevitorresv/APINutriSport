import Joi from "joi";
import { ProductTypes } from "../util/dataTypes";

export interface ProductInterface{
    name: string
    description: string
    SKU: string
    brand: string
    category: string
    PVP: number
    stock: number
    photos: string[]
    ingredients: string
    energy: number
    fats: number
    carbohydrates: number
    proteins: number
    salt: number
    weight: number
    dimensions: string
    instructions: string
}

export const productSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    SKU: Joi.string().required(),
    brand: Joi.string().required(),
    category: Joi.string().valid(...Object.values(ProductTypes)).required(),
    PVP: Joi.number().required(),
    stock: Joi.number().required(),
    photos: Joi.array().items(Joi.string()).length(3).required(),
    ingredients: Joi.string().required(),
    energy: Joi.number().required(),
    fats: Joi.number().required(),
    carbohydrates: Joi.number().required(),
    proteins: Joi.number().required(),
    salt: Joi.number().required(),
    weight: Joi.number().required(),
    dimensions: Joi.string().required(),
    instructions: Joi.string().required(),
})