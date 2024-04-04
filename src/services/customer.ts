import { CustomerInterface, CustomerModel } from "../models/Customer";

export const fetchAllCustomers = async (): Promise<any> => {
    try {
        return await CustomerModel.find();
    } catch (error) {
        console.error('Error, customers were not obtained: ', error)
        throw error;
    }
}

export const fetchCustomersById = async (id: string): Promise<any> => {
    try{
        return await CustomerModel.findById(id);

    }catch(error){
        console.error('Error, customer were not obtained: ', error)
        throw error;
    }
}


export const postCustomer = async(customer: CustomerInterface) => {
    try {

        const data = new CustomerModel({
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            birth: customer.birth,
            gender: customer.gender,
            postalCode: customer.postalCode
        })
        await data.save();
        return { success: true, customer: customer }
    } catch (error) {
        console.error('Error, customer not saved: ', error)
        throw error;
    }
}


export const putCustomer = async (id: string, body: CustomerInterface) => {
    try {
        return await CustomerModel.findByIdAndUpdate(id, body);
    } catch (error) {
        console.error('Error, customer not updated: ', error)
        throw error;
    }
}


export const deleteCustomer = async (id: string) => {
    try {
        return await CustomerModel.findByIdAndDelete(id);

    } catch (error) {
        console.error('Error, customer not deleted: ', error)
        throw error;
    }
}