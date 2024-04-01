import Joi from "joi"

export interface CommentInterface {
    name: string
    email: string
    comment: string
    date: Date
}

export const commentSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    comment: Joi.string().required(),
    date: Joi.date().required(),
})