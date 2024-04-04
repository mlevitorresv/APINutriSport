import express, { Request, Response } from 'express'
import { SaleInterface } from '../models/Sale';
import { deleteSale, fetchAllSales, fetchSalesById, putSale, postSale } from '../services/sale';


export const saleRouter = express.Router();

saleRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allSales: SaleInterface[] = await fetchAllSales();
        res.json({ sales: allSales })
    } catch (error) {
        console.error('Error getting the sales: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


saleRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const sale: SaleInterface = await fetchSalesById(id);
        res.json({ sales: sale })
    } catch (error) {
        console.error('Error getting the sale: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


saleRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await postSale(req.body);
        res.json(result)
    } catch (error) {
        console.error('Error saving the sale: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


saleRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await putSale(id, req.body);
        res.json(result)
    } catch (error) {
        console.error('Error updating the sale: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


saleRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteSale(id);
        res.json(result)
    } catch (error) {
        console.error('Error deleting the sale: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})