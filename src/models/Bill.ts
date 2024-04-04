import { Schema, model } from "mongoose"
import { BillType } from "../util/dataTypes"

export interface BillsInterface{
    beneficiary: string
    description: string
    type: string
    paymentAmount: number
    date: Date
}

const billsSchema = new Schema({
    beneficiary: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, enum: BillType, required: true},
    paymentAmount: {type: Number, required: true},
    date: {type: Date, required: true},
})


export const BillModel = model<BillsInterface>('Bill', billsSchema)