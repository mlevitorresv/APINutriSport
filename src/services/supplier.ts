import { mongoConnect, executeQuery } from "../config/db";
import { SupplierInterface } from "../models/Supplier";

export const fetchAllSuppliers = async (): Promise<any> => {
    try {
        const [result, fields] = await executeQuery(`SELECT * FROM suppliers`)
        return result;
    } catch (error) {
        console.error('Error, suppliers were not obtained: ', error)
        throw error;
    }
}

export const fetchSuppliersById = async (id: string): Promise<any> => {
    try{
        const [result, fields] = await executeQuery(`SELECT * FROM suppliers WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, supplier were not obtained: ', error)
        throw error;
    }
}


export const postSupplier = async(supplier: SupplierInterface) => {
    try {
        const query = `
        INSERT INTO suppliers (category, email, name, phone, postalCode, web)
        VALUES ('${supplier.category}', '${supplier.email}', '${supplier.name}', '${supplier.phone}', '${supplier.postalCode}', '${supplier.web}')
        `

        const [result, fields] = await executeQuery(query)
        return { success: true, supplier: supplier }
    } catch (error) {
        console.error('Error, supplier not saved: ', error)
        throw error;
    }
}


export const patchSupplier = async (id: string, body: SupplierInterface) => {
    try {
        const updateFields = {...body};
        const keys = Object.keys(updateFields)
        const values = Object.values(updateFields)
        
        const setClause = keys.map(key => `${key} = ?`).join(', ')

        const query = `UPDATE suppliers SET ${setClause} WHERE id = ?;`;

        const updateValues = [...values, id];

        executeQuery(query, updateValues)
        return { success: true, user: body }

    } catch (error) {
        console.error('Error, supplier not updated: ', error)
        throw error;
    }
}


export const deleteSupplier = async (id: string) => {
    try {
        const [result, fields] = await executeQuery(`DELETE FROM suppliers WHERE id = ${id}`)
        return result;
    } catch (error) {
        console.error('Error, supplier not deleted: ', error)
        throw error;
    }
}