import { mysqlConnect, executeQuery } from "../config/db";
import { ProductInterface } from "../models/Product";

export const fetchAllProducts = async (): Promise<any> => {
    try {
        const [result, fields] = await executeQuery(`SELECT * FROM products`)
        return result;
    } catch (error) {
        console.error('Error, products were not obtained: ', error)
        throw error;
    }
}

export const fetchProductsById = async (id: string): Promise<any> => {
    try{
        const [result, fields] = await executeQuery(`SELECT * FROM products WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, product were not obtained: ', error)
        throw error;
    }
}


export const postProduct = async(product: ProductInterface) => {
    try {
        const query = `
        INSERT INTO products (PVP, SKU, brand, carbohydrates, category, description, dimensions, energy, fats, ingredients, instructions, name, photos, proteins, salt, stock, weight)
        VALUES ('${product.PVP}', '${product.SKU}', '${product.brand}', '${product.carbohydrates}', '${product.category}', '${product.description}', '${product.dimensions}', '${product.energy}', '${product.fats}', '${product.ingredients}', '${product.instructions}', '${product.name}', '${product.photos}', '${product.proteins}', '${product.salt}', '${product.stock}', '${product.weight}')
        `

        const [result, fields] = await executeQuery(query)
        return { success: true, product: product }
    } catch (error) {
        console.error('Error, product not saved: ', error)
        throw error;
    }
}


export const patchProduct = async (id: string, body: ProductInterface) => {
    try {
        const updateFields = {...body};
        const keys = Object.keys(updateFields)
        const values = Object.values(updateFields)
        
        const setClause = keys.map(key => `${key} = ?`).join(', ')

        const query = `UPDATE products SET ${setClause} WHERE id = ?;`;

        const updateValues = [...values, id];

        executeQuery(query, updateValues)
        return { success: true, user: body }

    } catch (error) {
        console.error('Error, product not updated: ', error)
        throw error;
    }
}


export const deleteProduct = async (id: string) => {
    try {
        const [result, fields] = await executeQuery(`DELETE FROM products WHERE id = ${id}`)
        return result;
    } catch (error) {
        console.error('Error, product not deleted: ', error)
        throw error;
    }
}