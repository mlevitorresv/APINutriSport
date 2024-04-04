import { BillModel, BillsInterface } from "../models/Bill";

export const fetchAllBills = async (): Promise<any> => {
    try {
        return await BillModel.find();
    } catch (error) {
        console.error('Error, bills were not obtained: ', error)
        throw error;
    }
}

export const fetchBillsById = async (id: string): Promise<any> => {
    try{
        return await BillModel.findById(id);
    }catch(error){
        console.error('Error, bill were not obtained: ', error)
        throw error;
    }
}


export const postBill = async(bill: BillsInterface) => {
    try {
        const data = new BillModel({
            beneficiary: bill.beneficiary,
            description: bill.description,
            type: bill.type,
            paymentAmount: bill.paymentAmount,
            date: bill.date
        })
        await data.save()
        return { success: true, bill: bill }
    } catch (error) {
        console.error('Error, bill not saved: ', error)
        throw error;
    }
}


export const putBill = async (id: string, body: BillsInterface) => {
    try {
        return await BillModel.findByIdAndUpdate(id, body)
    } catch (error) {
        console.error('Error, bill not updated: ', error)
        throw error;
    }
}


export const deleteBill = async (id: string) => {
    try {
        return await BillModel.findByIdAndDelete(id);
    } catch (error) {
        console.error('Error, bill not deleted: ', error)
        throw error;
    }
}