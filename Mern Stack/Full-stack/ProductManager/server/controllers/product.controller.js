const Product = require('../models/product.model');

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(createdProduct => res.json({ product: createdProduct }))
        .catch(err => res.json({message: "something went wrong", error: err }));
}

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({products: allProducts}))
        .catch(err => res.json({message: "something went wrong while getting all products", error: err}));
}

module.exports.getOneProduct = (req, res) => {
    Product.find({_id: req.params.id})
        .then(oneProduct => res.json({product: oneProduct}))
        .catch(err => res.json({message: "something went wrong while getting one product", error: err}));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedProduct => res.json({product: updatedProduct}))
        .catch(err => res.json({message: "something went wrong while updating", error: err}));
}

module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "something went wrong while deleting", error: err}));
}