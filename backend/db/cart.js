const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: {type : Scheme.Types.ObjectId, ref: 'users'},
    productsId : Array(String)
  
})

const cartsModel = mongoose.model("carts" , cartSchema)

module.exports = cartsModel