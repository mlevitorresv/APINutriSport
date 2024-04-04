import { SupplierInterface, SupplierModel } from "../models/Supplier";

export const fetchAllSuppliers = async (): Promise<any> => {
    try {
        return await SupplierModel.find()
    } catch (error) {
        console.error('Error, suppliers were not obtained: ', error)
        throw error;
    }
}

export const fetchSuppliersById = async (id: string): Promise<any> => {
    try{
        return await SupplierModel.findById(id)
    }catch(error){
        console.error('Error, supplier were not obtained: ', error)
        throw error;
    }
}


export const postSupplier = async(supplier: SupplierInterface) => {
    try {
        const data = new SupplierModel({
            category: supplier.category,
            email: supplier.email,
            name: supplier.name,
            phone: supplier.phone,
            postalCode: supplier.postalCode,
            web: supplier.web
        })
        await data.save()
        return { success: true, supplier: supplier }
    } catch (error) {
        console.error('Error, supplier not saved: ', error)
        throw error;
    }
}


export const putSupplier = async (id: string, body: SupplierInterface) => {
    try {
        return await SupplierModel.findByIdAndUpdate(id, body)
    } catch (error) {
        console.error('Error, supplier not updated: ', error)
        throw error;
    }
}


export const deleteSupplier = async (id: string) => {
    try {
        return await SupplierModel.findByIdAndDelete(id)
    } catch (error) {
        console.error('Error, supplier not deleted: ', error)
        throw error;
    }
}