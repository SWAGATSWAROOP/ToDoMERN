// backend/index.js

import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import connection from './db/db.js';
import addRouter from './routes/add.js';
import delRouter from './routes/update.js';
import fetchRouter from './routes/fetch.js';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;

// DB Connection
connection();

// For cross-origin authentication
app.use(cors());

// For accepting JSON data
app.use(express.json());

// For using URL-encoded data
app.use(express.urlencoded());

// Use the static files
const asset = 'asset';
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, asset)));

app.use('/add', addRouter);
app.use('/delete', delRouter);
app.use('/fetch', fetchRouter);

app.listen(port, () => {
    console.log(`Listening on port number ${port}`);
});
