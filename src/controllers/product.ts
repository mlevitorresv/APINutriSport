import express, { Request, Response } from 'express'
import { ProductInterface } from '../models/Product';
import { deleteProduct, fetchAllProducts, fetchProductsById, putProduct, postProduct } from '../services/product';


export const productRouter = express.Router();

productRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allProducts: ProductInterface[] = await fetchAllProducts();
        res.json({ products: allProducts })
    } catch (error) {
        console.error('Error getting the products: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


productRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const product: ProductInterface = await fetchProductsById(id);
        res.json({ products: product })
    } catch (error) {
        console.error('Error getting the product: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


productRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await postProduct(req.body);
        res.json(result)
    } catch (error) {
        console.error('Error saving the product: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


productRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await putProduct(id, req.body);
        res.json(result)
    } catch (error) {
        console.error('Error updating the product: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


productRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteProduct(id);
        res.json(result)
    } catch (error) {
        console.error('Error deleting the product: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})