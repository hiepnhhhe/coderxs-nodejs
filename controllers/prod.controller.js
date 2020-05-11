// const db = require('../config')
const Product = require('../models/product.model')

module.exports.index = (req, res) => {
    // let page = parseInt(req.query.page) || 1
    // let perPage = 8
    // let prodNum = db.get('products').value().length
    // let numPage = Math.floor(prodNum/ perPage)
    // let start = (page - 1) * perPage
    // let end = page * perPage

    // res.render('products/index', {
    //     products: db.get('products').value().slice(start, end),
    //     numPage: numPage
    // })

    Product.find().then((products) => {
        res.render('products/index', {
            products: products
        })
    })
}
