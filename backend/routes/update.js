import express from 'express';
import { ToDo } from '../models/Todomodel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = req.body.data;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ err: 'Invalid request format' });
        }
        await ToDo.deleteMany({ id: { $in: data } });
        return res.status(200).json({ message: 'Succesfully Deleted' });
    } catch (err) {
        console.log('Error in deleting', err);
        return res.status(500).json({ err: 'Internal Server Error' });
    }
});

export default router;
