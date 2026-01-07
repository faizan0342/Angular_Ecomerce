const express = require("express")

const router = express.Router()

const Category = require("../db/category") 

const {addCategory , updateCategory , deleteCategory , getCategory } = require("../handles/category-handler")

router.post("" ,async(req , res)=>{
    let categoryBody = req.body;

    let result = await addCategory(categoryBody)

    res.send(result)

})

router.get("" ,async(req , res)=>{

    let result = await getCategory()

    res.send(result)

})

router.put("/:id" ,async(req , res)=>{
    let id = req.params.id;
    let categoryBody = req.body;

    await updateCategory(id , categoryBody)

     res.send(({message : "updated category"}))
})

router.delete("/:id", async(req , res) => {
    let id = req.params.id;
    await deleteCategory(id);
    res.send(({message : "deleted category"}))
})

module.exports = router;