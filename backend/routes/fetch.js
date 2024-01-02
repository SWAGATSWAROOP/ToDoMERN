import express from 'express';
import { ToDo } from '../models/Todomodel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await ToDo.find().lean();
        console.log('Succesfully Data Accessed');
        return res.status(200).json({ data: data });
    } catch (error) {
        console.log('Error in fetching data');
        return res.status(500).json({ error: error });
    }
});

export default router;
