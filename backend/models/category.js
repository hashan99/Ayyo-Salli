const mongoose = require('mongoose');

//Category Schema
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
    },
    colors: {
        type: String,
    }
})

//Category Model
exports.Category = mongoose.model('Category', categorySchema);