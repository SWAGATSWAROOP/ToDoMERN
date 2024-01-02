import express from 'express';
import { ToDo } from '../models/Todomodel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        req.body.data.name = req.body.data.name.trim();
        await ToDo.create({
            name: req.body.data.name,
            type: req.body.data.type,
            deadline: req.body.data.deadline,
        });
        console.log('Succesfully Added Data');
        return res.status(200).json({ message: 'Succesfully Added Data' });
    } catch (err) {
        console.log('Error in Adding data');
        return res.status(500).json({ message: err });
    }
});

export default router;
