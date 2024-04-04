import { ProductTypes } from "../util/dataTypes";
import { Schema, model } from "mongoose";

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

export const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    SKU: {type: String, required: true},
    brand: {type: String, required: true},
    category: {type: String, enum:ProductTypes, required: true},
    PVP: {type: Number, required: true},
    stock: {type: Number, required: true},
    photos: {
        type: [
            {
                type: String,
                required: true
            }
        ],
        validate: {
            validator: function(v: String[]) {
                return v.length === 3;
            },
            message: 'La longitud de `photos` debe ser de exactamente 3 elementos.'
        }
    },
    ingredients: {type: String, required: true},
    energy: {type: Number, required: true},
    fats: {type: Number, required: true},
    carbohydrates: {type: Number, required: true},
    proteins: {type: Number, required: true},
    salt: {type: Number, required: true},
    weight: {type: Number, required: true},
    dimensions: {type: String, required: true},
    instructions: {type: String, required: true},
})


export const ProductModel = model<ProductInterface>('Product', productSchema)