import express, { Request, Response } from 'express'
import { CustomerInterface } from '../models/Customer';
import { deleteCustomer, fetchAllCustomers, fetchCustomersById, patchCustomer, postCustomer } from '../services/customer';


export const customerRouter = express.Router();

customerRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allCustomers: CustomerInterface[] = await fetchAllCustomers();
        res.json({ customers: allCustomers })
    } catch (error) {
        console.error('Error getting the customers: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


customerRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const customer: CustomerInterface = await fetchCustomersById(id);
        res.json({ customers: customer })
    } catch (error) {
        console.error('Error getting the customer: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


customerRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await postCustomer(req.body);
        res.json(result)
    } catch (error) {
        console.error('Error saving the customer: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


customerRouter.patch('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await patchCustomer(id, req.body);
        res.json(result)
    } catch (error) {
        console.error('Error updating the customer: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


customerRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteCustomer(id);
        res.json(result)
    } catch (error) {
        console.error('Error deleting the customer: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})