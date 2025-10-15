const mongoose = require('mongoose');

// schema for products

const productsSchema = new mongoose.Schema({
    name: { types:String, required: true },
    description: { types:String, required: true},
    price: { type: Number, required: true },
    category: { type: String, required: true },
    inStock: { type: Boolean, required: true}
}, { timestamps: true});

// create model
const product = mongoose.model("product", productsSchema)

module.exports = product;