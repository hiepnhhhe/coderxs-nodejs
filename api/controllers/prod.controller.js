// const db = require('../config')
const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
  let products = await Product.find();

  res.json(products);
};

module.exports.create = async (req, res) => {
    let product = await Product.create(req.body);
  
    res.json(product);
  };
  