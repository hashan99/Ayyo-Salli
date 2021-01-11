const mongoose = require('mongoose');

//product Schema
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

//product Model
exports.Product = mongoose.model('Product', productSchema);