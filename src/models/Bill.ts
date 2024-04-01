import Joi from 'joi'

export interface BillsInterface{
    beneficiary: string
    description: string
    type: string
    paymentAmount: number
    date: Date
}

enum BillType{
    Compra = "compra",
    Alquiler = "alquiler",
    Nómina = "nómina"
}

export const billsSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    beneficiary: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string().valid(...Object.values(BillType)).required(),
    paymentAmount: Joi.number().required(),
    date: Joi.date().required(),
})