const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    count: {type: Number, default: 1},
    productID: {type: mongoose.Schema.Types.ObjectId, ref: 'product'},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});

const CartModel = mongoose.model('cart', cartSchema);

module.exports = CartModel