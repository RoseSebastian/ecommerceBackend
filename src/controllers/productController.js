const ProductModel = require("../models/productModel")

const getAllProducts = async (req,res) => {
    const allProducts =  await ProductModel.find()
    res.json({allProducts})
}

const createProduct = async(req,res) => {
    const newProduct = await ProductModel.create(req.body)
    res.json(newProduct)
}

module.exports = {getAllProducts, createProduct}