import { mysqlConnect, executeQuery } from "../config/db";
import { CommentInterface } from "../models/Comment";

export const fetchAllComments = async (): Promise<any> => {
    try {
        const [result, fields] = await executeQuery(`SELECT * FROM comments`)
        return result;
    } catch (error) {
        console.error('Error, comments were not obtained: ', error)
        throw error;
    }
}

export const fetchCommentsById = async (id: string): Promise<any> => {
    try{
        const [result, fields] = await executeQuery(`SELECT * FROM comments WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, comment were not obtained: ', error)
        throw error;
    }
}


export const postComment = async(comment: CommentInterface) => {
    try {
        const query = `
        INSERT INTO comments (name, email, date, comment)
        VALUES ('${comment.name}', '${comment.email}', '${comment.date}', '${comment.comment}')
        `

        const [result, fields] = await executeQuery(query)
        return { success: true, comment: comment }
    } catch (error) {
        console.error('Error, comment not saved: ', error)
        throw error;
    }
}


export const patchComment = async (id: string, body: CommentInterface) => {
    try {
        const updateFields = {...body};
        const keys = Object.keys(updateFields)
        const values = Object.values(updateFields)
        
        const setClause = keys.map(key => `${key} = ?`).join(', ')

        const query = `UPDATE comments SET ${setClause} WHERE id = ?;`;

        const updateValues = [...values, id];

        executeQuery(query, updateValues)
        return { success: true, user: body }

    } catch (error) {
        console.error('Error, comment not updated: ', error)
        throw error;
    }
}


export const deleteComment = async (id: string) => {
    try {
        const [result, fields] = await executeQuery(`DELETE FROM comments WHERE id = ${id}`)
        return result;
    } catch (error) {
        console.error('Error, comment not deleted: ', error)
        throw error;
    }
}