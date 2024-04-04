import { GenderType } from '../util/dataTypes'
import { Schema, model } from 'mongoose'

export interface CustomerInterface{
    name: string,
    email: string
    phone: string
    postalCode: number
    birth: Date
    gender : string
}

export const customerSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    postalCode: {type: Number, min: 5, max:5 ,required: true},
    birth: {type: Date, required: true},
    gender: {type: String, enum: GenderType,required: true},
})


export const CustomerModel = model<CustomerInterface>('Customer', customerSchema)