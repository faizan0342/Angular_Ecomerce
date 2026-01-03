const Category = require("../db/category") 

async function addCategory(categoryBody){

    let category = new Category({
        name : categoryBody.name
    });

    category.save();

    return category.toObject();

    // res.send(category.toObject()); 
}

async function updateCategory( id ,categoryBody){

    await Category.findByIdAndUpdate({_id : id} , categoryBody)


    return ; 
}

module.exports = {addCategory , updateCategory}