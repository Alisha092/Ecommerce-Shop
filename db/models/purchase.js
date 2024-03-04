const mongoose = require('mongoose');
const { Schema } = mongoose;

const purchaseSchema = new Schema({
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ],
    totalCost: {
        type: Number,
        required: true
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    }
});

module.exports = mongoose.model('Purchase', purchaseSchema);
