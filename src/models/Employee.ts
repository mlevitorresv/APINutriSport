import { ContractTypes, GenderType } from '../util/dataTypes'
import { Schema, model } from 'mongoose'

export interface EmployeeInterface{
    name: string
    photo: string
    birth: Date
    gender : string
    DNI: string
    email: string
    password: string
    phone: string
    postalCode: number
    address: string
    job: string
    startDate: Date
    contract: string
    active: boolean
    socialSecurity: number
    bankAccount: string
}

export const employeeSchema = new Schema({
    name: {type: String, required: true},
    birth: {type: Date, required: true},
    gender: {type: String, enum:GenderType, required: true},
    DNI: {type: String, min: 9, max:12 ,required: true},
    email: {type: String, required: true},
    password: {type: String, min: 9, required: true},
    phone: {type: String, required: true},
    postalCode: {type: String,min: 5, max:5 , required: true},
    address: {type: String, required: true},
    job: {type: String, required: true},
    startDate: {type: Date, required: true},
    contract: {type: String, enum:ContractTypes, required: true},
    active: {type: Boolean, required: true},
    socialSecurity: {type: String, min: 12, max:12 ,required: true},
    bankAccount: {type: String, required: true},
})

export const EmployeeModel = model('Employee', employeeSchema)