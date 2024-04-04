import { Schema, model } from "mongoose"

export interface CommentInterface {
    name: string
    email: string
    comment: string
    date: Date
}

export const commentSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    comment: {type: String, required: true},
    date: {type: Date, required: true},
})

export const CommentModel = model<CommentInterface>('Comment', commentSchema)