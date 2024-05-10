import mongoose, { Types } from 'mongoose'
import User from './user.js';
import { Schema } from 'zod';


const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    copiesLeft: {
        type: Number,
        required: true,
    },
    description: {
        type: String, 
        required:true,
    },
    // reservationStatus: {
    //     type: Boolean, 
    //     default: false,
    // },
    reservedBy:[{
        userName : String,
        userId: {
            type: Types.ObjectId,
        }
    }]

});


bookSchema.path('reservedBy.userId').ref('User');

const Book = mongoose.model('Book', bookSchema);

export default Book;




























