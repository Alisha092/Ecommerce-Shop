const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        default: 0,
        required: true
    },
    saler: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]

    
    
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;