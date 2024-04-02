import { mysqlConnect, executeQuery } from "../config/db";
import { EmployeeInterface } from "../models/Employee";

export const fetchAllEmployees = async (): Promise<any> => {
    try {
        const [result, fields] = await executeQuery(`SELECT * FROM employees`)
        return result;
    } catch (error) {
        console.error('Error, employees were not obtained: ', error)
        throw error;
    }
}

export const fetchEmployeesById = async (id: string): Promise<any> => {
    try{
        const [result, fields] = await executeQuery(`SELECT * FROM employeess WHERE id = ${id}`)
        return result;
    }catch(error){
        console.error('Error, employee were not obtained: ', error)
        throw error;
    }
}


export const postEmployee = async(employee: EmployeeInterface) => {
    try {
        const query = `
        INSERT INTO employees (DNI, active, address, bankAccount, birth, contract, email, gender, job, name, password, phone, postalCode, socialSecurity, startDate)
        VALUES ('${employee.DNI}', '${employee.active}', '${employee.address}', '${employee.bankAccount}', '${employee.birth}', '${employee.contract}', '${employee.email}', '${employee.gender}', '${employee.job}', '${employee.name}', '${employee.password}', '${employee.phone}', '${employee.postalCode}', '${employee.socialSecurity}', '${employee.startDate}')
        `

        const [result, fields] = await executeQuery(query)
        return { success: true, employee: employee }
    } catch (error) {
        console.error('Error, employee not saved: ', error)
        throw error;
    }
}


export const patchEmployee = async (id: string, body: EmployeeInterface) => {
    try {
        const updateFields = {...body};
        const keys = Object.keys(updateFields)
        const values = Object.values(updateFields)
        
        const setClause = keys.map(key => `${key} = ?`).join(', ')

        const query = `UPDATE employees SET ${setClause} WHERE id = ?;`;

        const updateValues = [...values, id];

        executeQuery(query, updateValues)
        return { success: true, user: body }

    } catch (error) {
        console.error('Error, employee not updated: ', error)
        throw error;
    }
}


export const deleteEmployee = async (id: string) => {
    try {
        const [result, fields] = await executeQuery(`DELETE FROM employees WHERE id = ${id}`)
        return result;
    } catch (error) {
        console.error('Error, employee not deleted: ', error)
        throw error;
    }
}