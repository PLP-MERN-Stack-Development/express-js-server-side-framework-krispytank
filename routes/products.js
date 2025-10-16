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
});

// create a product
router.post("/", async (req, res) => {
    const { name, description, price, category, inStock } = req.body;

    try {
        const product = new product({ name, description, price, category, instock});
        const saved = await product.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});


// update a producct by id
router.put("/:id", async (req, res) => {
    try {
        const product = await product.findByIdAndUpdate(
            req.params.id,
            req.boby,
            { new: true }
        );
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});

// delete a product by id
router.delete("/:id", async (req, res) => {
    try {
        await product.findByIdAndDelete(
            req.params.id 
        );
        res.json({ message: "product deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// GET /api/products - Get all products

router.get('/api/products', (req, res) => {
  res.json(products);
});


module.exports = router;
