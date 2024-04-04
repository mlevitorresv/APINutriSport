import { CommentInterface, CommentModel } from "../models/Comment";

export const fetchAllComments = async (): Promise<any> => {
    try {
        return await CommentModel.find();
    } catch (error) {
        console.error('Error, comments were not obtained: ', error)
        throw error;
    }
}

export const fetchCommentsById = async (id: string): Promise<any> => {
    try{
        return await CommentModel.findById(id);
    }catch(error){
        console.error('Error, comment were not obtained: ', error)
        throw error;
    }
}


export const postComment = async(comment: CommentInterface) => {
    try {
        const data = new CommentModel({
            name: comment.name,
            email: comment.email,
            comment: comment.comment,
            date: comment.date,
        })
        await data.save();
        return { success: true, comment: data }
    } catch (error) {
        console.error('Error, comment not saved: ', error)
        throw error;
    }
}


export const putComment = async (id: string, body: CommentInterface) => {
    try {
        return await CommentModel.findByIdAndUpdate(id, body);

    } catch (error) {
        console.error('Error, comment not updated: ', error)
        throw error;
    }
}


export const deleteComment = async (id: string) => {
    try {
        return await CommentModel.findByIdAndDelete(id);
    } catch (error) {
        console.error('Error, comment not deleted: ', error)
        throw error;
    }
}