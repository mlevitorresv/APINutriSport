import { EmployeeInterface, EmployeeModel } from "../models/Employee";
const bcrypt = require('bcrypt')
const saltRounds = 10;

export const fetchAllEmployees = async (): Promise<any> => {
    try {
        return await EmployeeModel.find();
    } catch (error) {
        console.error('Error, employees were not obtained: ', error)
        throw error;
    }
}

export const fetchEmployeesById = async (id: string): Promise<any> => {
    try{
        return await EmployeeModel.findById(id);
    }catch(error){
        console.error('Error, employee were not obtained: ', error)
        throw error;
    }
}


export const postEmployee = async(employee: EmployeeInterface) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(employee.password, salt)

        const data = new EmployeeModel({
            photo: employee.photo,
            DNI: employee.DNI,
            active: employee.active,
            address: employee.address,
            bankAccount: employee.bankAccount,
            birth: employee.birth,
            contract: employee.contract,
            email: employee.email,
            gender: employee.gender,
            job: employee.job,
            name: employee.name,
            password: hashedPassword, // Recuerda que para una aplicación real, deberías guardar la contraseña de forma segura, como un hash
            phone: employee.phone,
            postalCode: employee.postalCode,
            socialSecurity: employee.socialSecurity,
            startDate: employee.startDate
        })

        await data.save()
        return { success: true, employee: employee }
    } catch (error) {
        console.error('Error, employee not saved: ', error)
        throw error;
    }
}


export const putEmployee = async (id: string, body: EmployeeInterface) => {
    try {
        return await EmployeeModel.findByIdAndUpdate(id, body);
    } catch (error) {
        console.error('Error, employee not updated: ', error)
        throw error;
    }
}


export const deleteEmployee = async (id: string) => {
    try {
        return await EmployeeModel.findByIdAndDelete(id);
    } catch (error) {
        console.error('Error, employee not deleted: ', error)
        throw error;
    }
}