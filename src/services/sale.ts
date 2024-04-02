import { mysqlConnect, executeQuery } from "../config/db";
import { SaleInterface } from "../models/Sale";

export const fetchAllSales = async (): Promise<any> => {
    try {
        const [result, fields] = await executeQuery(`SELECT * FROM sales`)
        return result;
    } catch (error) {
        console.error('Error, sales were not obtained: ', error)
        throw error;
    }
}

export const fetchSalesById = async (id: string): Promise<any> => {
    try{
        const [result, fields] = await executeQuery(`SELECT * FROM saless WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, sale were not obtained: ', error)
        throw error;
    }
}


export const postSale = async(sale: SaleInterface) => {
    try {
        const query = `
        INSERT INTO sales (beneficiary, description, type, paymentAmount, date)
        VALUES ('${sale.customer}', '${sale.date}', '${sale.employee}', '${sale.invoiceNumber}', '${sale.payMethod}', '${sale.products}')
        `

        const [result, fields] = await executeQuery(query)
        return { success: true, sale: sale }
    } catch (error) {
        console.error('Error, sale not saved: ', error)
        throw error;
    }
}


export const patchSale = async (id: string, body: SaleInterface) => {
    try {
        const updateFields = {...body};
        const keys = Object.keys(updateFields)
        const values = Object.values(updateFields)
        
        const setClause = keys.map(key => `${key} = ?`).join(', ')

        const query = `UPDATE sales SET ${setClause} WHERE id = ?;`;

        const updateValues = [...values, id];

        executeQuery(query, updateValues)
        return { success: true, user: body }

    } catch (error) {
        console.error('Error, sale not updated: ', error)
        throw error;
    }
}


export const deleteSale = async (id: string) => {
    try {
        const [result, fields] = await executeQuery(`DELETE FROM sales WHERE id = ${id}`)
        return result;
    } catch (error) {
        console.error('Error, sale not deleted: ', error)
        throw error;
    }
}