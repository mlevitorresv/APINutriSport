import { PayTypes } from "../util/dataTypes";
import { Schema, Types, model } from "mongoose";

export interface SaleInterface{
    customer: Types.ObjectId
    employee: Types.ObjectId
    products: Types.ObjectId[];
    date: Date
    payMethod: string
    invoiceNumber: number
}

export const saleSchema = new Schema({
    customer: {type: Schema.Types.ObjectId, ref: 'Customer', required: true},
    employee: {type: Schema.Types.ObjectId, ref: 'Employee', required: true},
    products: {
        type: [
            {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Products'
            }
        ]
    },
    date: {type: Date, required: true},
    payMethod: {type: String, enum:PayTypes, required: true},
    invoiceNumber: {type: Number, required: true},
})

export const SaleModel = model<SaleInterface>('Sale', saleSchema)