const mongoose = require("mongoose");

const wishlistsSchema = new mongoose.Schema({
    userId: {type : Scheme.Types.ObjectId, ref: 'users'},
    productsId : Array(String)
  
})

const wishlistModel = mongoose.model("wishlists" , wishlistsSchema)

module.exports = wishlistModel