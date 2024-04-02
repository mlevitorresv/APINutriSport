import express, { Request, Response } from 'express'
import { EmployeeInterface } from '../models/Employee';
import { deleteEmployee, fetchAllEmployees, fetchEmployeesById, patchEmployee, postEmployee } from '../services/employee';


export const employeeRouter = express.Router();

employeeRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allEmployees: EmployeeInterface[] = await fetchAllEmployees();
        res.json({ employees: allEmployees })
    } catch (error) {
        console.error('Error getting the employees: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


employeeRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const employee: EmployeeInterface = await fetchEmployeesById(id);
        res.json({ employees: employee })
    } catch (error) {
        console.error('Error getting the employee: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


employeeRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await postEmployee(req.body);
        res.json(result)
    } catch (error) {
        console.error('Error saving the employee: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


employeeRouter.patch('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await patchEmployee(id, req.body);
        res.json(result)
    } catch (error) {
        console.error('Error updating the employee: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


employeeRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteEmployee(id);
        res.json(result)
    } catch (error) {
        console.error('Error deleting the employee: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})