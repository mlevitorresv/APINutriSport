import express, { Request, Response } from 'express'
import { SupplierInterface } from '../models/Supplier';
import { deleteSupplier, fetchAllSuppliers, fetchSuppliersById, patchSupplier, postSupplier } from '../services/supplier';


export const supplierRouter = express.Router();

supplierRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allSuppliers: SupplierInterface[] = await fetchAllSuppliers();
        res.json({ suppliers: allSuppliers })
    } catch (error) {
        console.error('Error getting the suppliers: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


supplierRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const supplier: SupplierInterface = await fetchSuppliersById(id);
        res.json({ suppliers: supplier })
    } catch (error) {
        console.error('Error getting the supplier: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


supplierRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await postSupplier(req.body);
        res.json(result)
    } catch (error) {
        console.error('Error saving the supplier: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


supplierRouter.patch('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await patchSupplier(id, req.body);
        res.json(result)
    } catch (error) {
        console.error('Error updating the supplier: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


supplierRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteSupplier(id);
        res.json(result)
    } catch (error) {
        console.error('Error deleting the supplier: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})