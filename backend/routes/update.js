import express from 'express';
import { ToDo } from '../models/Todomodel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = req.body.data;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ err: 'Invalid request format' });
        }
        //Deleting Multiple Element we have to necessary use deleteMany
        await ToDo.deleteMany({ _id: { $nin: data._id } });
        console.log('Succesfully Deleted');
    } catch (err) {
        console.log('Error in deleting', err);
        console.log('Unsuccessful Deletion');
    }
});

export default router;
