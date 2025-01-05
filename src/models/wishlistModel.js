const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema({
    productID: {type: mongoose.Schema.Types.ObjectId, ref: 'product'},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});

const WishlistModel = mongoose.model('wishlist', wishlistSchema);

module.exports = WishlistModel