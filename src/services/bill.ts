import { mysqlConnect, executeQuery } from "../config/db";
import { BillsInterface } from "../models/Bill";

export const fetchAllBills = async (): Promise<any> => {
    try {
        const [result, fields] = await executeQuery(`SELECT * FROM bills`)
        return result;
    } catch (error) {
        console.error('Error, bills were not obtained: ', error)
        throw error;
    }
}

export const fetchBillsById = async (id: string): Promise<any> => {
    try{
        const [result, fields] = await executeQuery(`SELECT * FROM bills WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, bill were not obtained: ', error)
        throw error;
    }
}


export const postBill = async(bill: BillsInterface) => {
    try {
        const query = `
        INSERT INTO bills (beneficiary, description, type, paymentAmount, date)
        VALUES ('${bill.beneficiary}', '${bill.description}', '${bill.type}', '${bill.paymentAmount}', '${bill.date}')
        `

        const [result, fields] = await executeQuery(query)
        return { success: true, bill: bill }
    } catch (error) {
        console.error('Error, bill not saved: ', error)
        throw error;
    }
}


export const patchBill = async (id: string, body: BillsInterface) => {
    try {
        const updateFields = {...body};
        const keys = Object.keys(updateFields)
        const values = Object.values(updateFields)
        
        const setClause = keys.map(key => `${key} = ?`).join(', ')

        const query = `UPDATE bills SET ${setClause} WHERE id = ?;`;

        const updateValues = [...values, id];

        executeQuery(query, updateValues)
        return { success: true, user: body }

    } catch (error) {
        console.error('Error, bill not updated: ', error)
        throw error;
    }
}


export const deleteBill = async (id: string) => {
    try {
        const [result, fields] = await executeQuery(`DELETE FROM bills WHERE id = ${id}`)
        return result;
    } catch (error) {
        console.error('Error, bill not deleted: ', error)
        throw error;
    }
}