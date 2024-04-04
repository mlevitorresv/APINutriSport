import { ProductInterface, ProductModel } from "../models/Product";

export const fetchAllProducts = async (): Promise<any> => {
    try {
        return await ProductModel.find();
    } catch (error) {
        console.error('Error, products were not obtained: ', error)
        throw error;
    }
}

export const fetchProductsById = async (id: string): Promise<any> => {
    try{
        return await ProductModel.findById(id);
    }catch(error){
        console.error('Error, product were not obtained: ', error)
        throw error;
    }
}


export const postProduct = async(product: ProductInterface) => {
    try {
        const data = new ProductModel({
            name: product.name,
            description: product.description,
            SKU: product.SKU,
            brand: product.brand,
            category: product.category,
            PVP: product.PVP,
            stock: product.stock,
            photos: product.photos,
            ingredients: product.ingredients,
            energy: product.energy,
            fats: product.fats,
            carbohydrates: product.carbohydrates,
            proteins: product.proteins,
            salt: product.salt,
            weight: product.weight,
            dimensions: product.dimensions,
            instructions: product.instructions,
        })
        await data.save()
        return { success: true, product: product }
    } catch (error) {
        console.error('Error, product not saved: ', error)
        throw error;
    }
}


export const putProduct = async (id: string, body: ProductInterface) => {
    try {
        return await ProductModel.findByIdAndUpdate(id, body);

    } catch (error) {
        console.error('Error, product not updated: ', error)
        throw error;
    }
}


export const deleteProduct = async (id: string) => {
    try {
        return await ProductModel.findByIdAndDelete(id);
    } catch (error) {
        console.error('Error, product not deleted: ', error)
        throw error;
    }
}