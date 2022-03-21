import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    title: { type: String, required: true},
    price: Number,
    stock: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

