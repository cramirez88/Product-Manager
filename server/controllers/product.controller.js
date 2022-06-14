const Product = require('../models/product.model')

module.exports.index = (req, res) => {
  res.json({
    message: 'Hello World'
  })
}


module.exports.createProduct = (req, res) => {
  // const {product, price, description} = req.body;
  Product.create(req.body)
  .then(product => res.json(product))
  .catch(err => console.log(err))
}


module.exports.getAllProducts = (req, res) => {
  Product.find({})
  .then(product => {
    console.log(product)
    
    res.json(product)
    })
  .catch(err => console.log(err))
}


module.exports.getProduct = (req, res) => {
  Product.findOne({_id: req.params._id})
  .then(product => res.json(product))
  .catch(err => console.log(err))
}


