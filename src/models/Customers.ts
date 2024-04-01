import Joi from 'joi'

export interface CustomerInterface{
    name: string,
    email: string
    phone: string
    postalCode: number
    birth: Date
    gender : string
}

enum GenderType {
    Male = "male",
    Female = "female",
    Other = "other",
}

export const commentSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    postalCode: Joi.number().min(5).max(5).required(),
    birth: Joi.date().required(),
    gender: Joi.string().valid(...Object.values(GenderType)).required(),
})