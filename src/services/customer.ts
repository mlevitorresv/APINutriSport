import { mongoConnect, executeQuery } from "../config/db";
import { CustomerInterface } from "../models/Customer";

export const fetchAllCustomers = async (): Promise<any> => {
    try {
        const [result, fields] = await executeQuery(`SELECT * FROM customers`)
        return result;
    } catch (error) {
        console.error('Error, customers were not obtained: ', error)
        throw error;
    }
}

export const fetchCustomersById = async (id: string): Promise<any> => {
    try{
        const [result, fields] = await executeQuery(`SELECT * FROM customers WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, customer were not obtained: ', error)
        throw error;
    }
}


export const postCustomer = async(customer: CustomerInterface) => {
    try {
        const query = `
        INSERT INTO customers (name, email, phone, birth, gender, postalCode)
        VALUES ('${customer.name}', '${customer.email}', '${customer.phone}', '${customer.birth}', '${customer.gender}', '${customer.postalCode}')
        `

        const [result, fields] = await executeQuery(query)
        return { success: true, customer: customer }
    } catch (error) {
        console.error('Error, customer not saved: ', error)
        throw error;
    }
}


export const patchCustomer = async (id: string, body: CustomerInterface) => {
    try {
        const updateFields = {...body};
        const keys = Object.keys(updateFields)
        const values = Object.values(updateFields)
        
        const setClause = keys.map(key => `${key} = ?`).join(', ')

        const query = `UPDATE customers SET ${setClause} WHERE id = ?;`;

        const updateValues = [...values, id];

        executeQuery(query, updateValues)
        return { success: true, customer: body }

    } catch (error) {
        console.error('Error, customer not updated: ', error)
        throw error;
    }
}


export const deleteCustomer = async (id: string) => {
    try {
        const [result, fields] = await executeQuery(`DELETE FROM customers WHERE id = ${id}`)
        return result;
    } catch (error) {
        console.error('Error, customer not deleted: ', error)
        throw error;
    }
}