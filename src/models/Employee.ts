import Joi from 'joi'
import { ContractTypes, GenderType } from '../util/dataTypes'

export interface EmployeeInterface{
    name: string,
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

export const employeeSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().required(),
    birth: Joi.date().required(),
    gender: Joi.string().valid(...Object.values(GenderType)).required(),
    DNI: Joi.string().min(9).max(12).required(),
    email: Joi.string().required(),
    password: Joi.string().min(9).required(),
    phone: Joi.string().required(),
    postalCode: Joi.number().min(5).max(5).required(),
    address: Joi.string().required(),
    job: Joi.string().required(),
    startDate: Joi.date().required(),
    contract: Joi.string().valid(...Object.values(ContractTypes)).required(),
    active: Joi.boolean().required(),
    socialSecurity: Joi.number().min(12).max(12).required(),
    bankAccount: Joi.string().required(),
})