const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String,
    quantity: Number
});

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel