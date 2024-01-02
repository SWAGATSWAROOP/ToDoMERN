import express from 'express';
import { ToDo } from '../models/Todomodel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        req.body.name = req.body.name.trim();
        await ToDo.create({
            name: req.body.name,
            type: req.body.type,
            deadline: req.body.deadline,
        });
        console.log('Succesfully Added Data');
        return res.status(200).json({ message: 'Succesfully Added Data' });
    } catch (err) {
        console.log('Error in Adding data');
        return res.status(500).json({ message: err });
    }
});

export default router;
