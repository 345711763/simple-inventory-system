import express from "express";
import React from "react";
import Product from "../model/product";
import mongoose from "mongoose";
const router = express.Router();
/* GET home page. */
router.put('/:id', function(req, res) {
    console.log("将要更新数据");
    let id = mongoose.Types.ObjectId(req.params.id);
    Product.findOneAndUpdate({_id: id},req.body).then(function(){
        res.send("update success")
    }).catch(error=>console.log(error))
});

export default router;
