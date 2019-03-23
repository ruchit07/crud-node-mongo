const Product = require('../models/product.model');

exports.create = (req, res) => {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save((err) => {
        if(err) return next(err);
        res.send('Product Saved Successfully.');
    })
}

exports.read = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if(err) return next(err);
        res.send(product);
    });
}

exports.update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product) => {
        if(err) return next(err);
        res.send('Product Updated.');
    });
}

exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id, {$set: req.body}, (err) => {
        if(err) return next(err);
        res.send('Product Deleted Successfully.');
    });
}