// Importing dotenv and configuring it
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express, { urlencoded } from 'express';
import connection from './db/db.js';
import addRouter from './routes/add.js';
import delRouter from './routes/update.js';
import fetchRouter from './routes/fetch.js';

const app = express();
const port = process.env.PORT || 5000;

//DB Connection
connection();
//For cross origin authenthentication
app.use(cors());

//For Accepting JSON Data
app.use(express.json());
//For using url
app.use(urlencoded());

app.use('/add', addRouter);
app.use('/delete', delRouter);
app.use('/fetch', fetchRouter);

app.listen(port, () => {
    console.log(`Listening on port number ${port}`);
});
