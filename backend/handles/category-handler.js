const Category = require("../db/category") 

async function addCategory(categoryBody){

    let category = new Category({
        name : categoryBody.name
    });

    category.save();

    return category.toObject();

    // res.send(category.toObject()); 
}

async function getCategory(){

    let categories = await Category.find();
    
    return categories.map((e) => e.toObject()); 
}

async function updateCategory( id ,categoryBody){

    await Category.findByIdAndUpdate({_id : id} , categoryBody)


    return ; 
}

async function deleteCategory(id){
    await Category.findByIdAndDelete({_id : id})
    return ; 
}



module.exports = {addCategory , updateCategory , deleteCategory, getCategory}