const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    shotDescription :String,
    description:String,
    purchagePrice : number,
    sellingPrice : Number,
    images : Array(string),
    categoryId : {type : Scheme.Types.ObjectId, ref: 'categories'}

})

const productModel = mongoose.model("categories" , productSchema)

module.exports = productModel