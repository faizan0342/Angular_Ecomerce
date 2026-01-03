const express = require("express")

const router = express.Router()

const Category = require("../db/category") 

const {addCategory , updateCategory} = require("../handles/category-handler")

router.post("" ,async(req , res)=>{
    let categoryBody = req.body;

    let result = await addCategory(categoryBody)

    res.send(result)

})

router.put("/:id" ,async(req , res)=>{
    let id = req.params.id;
    let categoryBody = req.body;

    await updateCategory(id , categoryBody)

     res.send(({message : "oks"}))
})

module.exports = router;