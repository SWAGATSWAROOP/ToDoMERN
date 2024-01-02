import Mongoose from 'mongoose';
const toDoSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'Choose Category',
    },
    deadline: {
        type: String,
        default: 'No deadline',
    },
});

console.log('Succesfully Created Schema');
export const ToDo = Mongoose.model('ToDo', toDoSchema);
