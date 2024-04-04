import { SaleInterface, SaleModel } from "../models/Sale";

export const fetchAllSales = async (): Promise<any> => {
    try {
        return await SaleModel.find()
    } catch (error) {
        console.error('Error, sales were not obtained: ', error)
        throw error;
    }
}

export const fetchSalesById = async (id: string): Promise<any> => {
    try{
        return await SaleModel.findById(id)
    }catch(error){
        console.error('Error, sale were not obtained: ', error)
        throw error;
    }
}


export const postSale = async(sale: SaleInterface) => {
    try {
        const data = new SaleModel({
            customer: sale.customer,
            employee: sale.employee,
            date: sale.date,
            invoiceNumber: sale.invoiceNumber,
            payMethod: sale.payMethod
        })
        await data.save()
        return { success: true, sale: sale }
    } catch (error) {
        console.error('Error, sale not saved: ', error)
        throw error;
    }
}


export const putSale = async (id: string, body: SaleInterface) => {
    try {
        return await SaleModel.findByIdAndUpdate(id, body)

    } catch (error) {
        console.error('Error, sale not updated: ', error)
        throw error;
    }
}


export const deleteSale = async (id: string) => {
    try {
        return await SaleModel.findByIdAndDelete(id)
    } catch (error) {
        console.error('Error, sale not deleted: ', error)
        throw error;
    }
}