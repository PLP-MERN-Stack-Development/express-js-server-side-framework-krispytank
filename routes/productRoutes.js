const express = require('express')
const router = express.Router();

const product = require('../models/products');

// get all products
router.get("/", async (req, res) => {
    try { 
        const products = await product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
})