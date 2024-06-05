const express = require("express");
const router = express.Router();
const products = require("../model/product.model");
const upload = require('../middleware/upload');
const productController = require('../controller/product.controller')

    router.get('/', (req,res) => {
        res.send("server is running");
    })

    router.get('/products', (req,res) => {
        products.find()
        .then(responce => res.json(responce))
        .catch(err => console.log(err));
     })
     

    router.post('/addProduct', upload.single('image'), (req, res) => {
        const inputData = new products({
            name: req.body.name,
            model: req.body.model,
            rating: req.body.rating,
            price: req.body.price
        });
        if(req.file){
            inputData.image = req.file.path;
        }
        inputData.save()
        .then(response => {
            res.json({
                message: "Product Added Successfully"
            });
        })
        .catch(err => {
            res.json({
                message: "Error"
            });
        });
    });
    
    module.exports = router;
    
    
module.exports = router;
