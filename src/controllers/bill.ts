import express, { Request, Response } from 'express'
import { BillsInterface } from '../models/Bill';
import { deleteBill, fetchAllBills, fetchBillsById, patchBill, postBill } from '../services/bill';


export const billRouter = express.Router();

billRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allBills: BillsInterface[] = await fetchAllBills();
        res.json({ bills: allBills })
    } catch (error) {
        console.error('Error getting the bills: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


billRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const bill: BillsInterface = await fetchBillsById(id);
        res.json({ bills: bill })
    } catch (error) {
        console.error('Error getting the bill: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


billRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await postBill(req.body);
        res.json(result)
    } catch (error) {
        console.error('Error saving the bill: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


billRouter.patch('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await patchBill(id, req.body);
        res.json(result)
    } catch (error) {
        console.error('Error updating the bill: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


billRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteBill(id);
        res.json(result)
    } catch (error) {
        console.error('Error deleting the bill: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})