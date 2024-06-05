const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema ({
    name : {
        type : String,
        required : true
    },

    model : {
        type : String,
        required : true
    },

    rating : {
        type : Number,
        required : true
    },


    price : {
        type : Number,
        required : true
    },

    image : {
        type : String,
        required : true
    }
})

const products = mongoose.model('productInfo', productSchema);

module.exports = products;