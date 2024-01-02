import dotenv from 'dotenv';
dotenv.config();
import Mongoose from 'mongoose';

const connection = async () => {
    try {
        await Mongoose.connect(`${process.env.DB_URI}`);
        console.log('Connection is succesful to DB');
    } catch (err) {
        console.log('Error in connecting to DB', err);
    }
};

export default connection;
