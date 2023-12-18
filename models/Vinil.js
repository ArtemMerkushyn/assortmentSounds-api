import mongoose from 'mongoose';

const VinilSchema = new mongoose.Schema(
    {
        nameVinil: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        availability: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        productCode: {
            type: String,
            required: true,
        },
        conditionGoods: {
            type: String,
            required: true,
        },
        producer: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imgUrl: [
            {
                type: String,
            }
        ],
    },
    { timestamps: true },
);
export default mongoose.model/('Vinil', VinilSchema);