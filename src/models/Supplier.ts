import {model, Schema} from "mongoose";
import { CategoriesSuppliersTypes } from "../util/dataTypes";

export interface SupplierInterface{
    name: string
    postalCode: number
    phone: string
    email: string
    web: string
    category : string
}

export const supplierSchema = new Schema({
    name: {type: String, required: true},
    postalCode: {type: String,min: 5, max:5 , required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    web: {type: String, required: true},
    category : {type: String, enum:CategoriesSuppliersTypes, required: true},
})

export const SupplierModel = model<SupplierInterface>('Supplier', supplierSchema)