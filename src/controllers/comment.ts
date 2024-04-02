import express, { Request, Response } from 'express'
import { CommentInterface } from '../models/Comment';
import { deleteComment, fetchAllComments, fetchCommentsById, patchComment, postComment } from '../services/comment';


export const commentRouter = express.Router();

commentRouter.get('/', async (req: Request, res: Response) => {
    try {
        const allComments: CommentInterface[] = await fetchAllComments();
        res.json({ comments: allComments })
    } catch (error) {
        console.error('Error getting the ccmments: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


commentRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const comment: CommentInterface = await fetchCommentsById(id);
        res.json({ comment: comment })
    } catch (error) {
        console.error('Error getting the comment: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


commentRouter.post('/', async (req: Request, res: Response) => {
    try {
        const result = await postComment(req.body);
        res.json(result)
    } catch (error) {
        console.error('Error saving the comment: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


commentRouter.patch('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await patchComment(id, req.body);
        res.json(result)
    } catch (error) {
        console.error('Error updating the comment: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


commentRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await deleteComment(id);
        res.json(result)
    } catch (error) {
        console.error('Error deleting the comment: ', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})