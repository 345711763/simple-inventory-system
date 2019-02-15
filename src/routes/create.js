import express from "express";
import ReactDomServer from "react-dom/server";
import React from "react";
import {StaticRouter} from "react-router-dom";
import App from "../shared/App";
import Product from "../model/product";
import uniqueRandom from "unique-random";
import multer from "multer";
import path from "path";
import mongoose from "mongoose";
const rand = uniqueRandom (10000000,99999999);
const router = express.Router();
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./public/images');
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({storage:storage});
router.get("/:id",function(req,res){
        console.log("req.params.id 是"+ req.params.id);
        Product.findById(req.params.id)
            .then(function(doc){
                const markup = ReactDomServer.renderToString(
                    <StaticRouter location={req.baseUrl+req.url} context={{}}>
                        <App obj={doc}/>
                    </StaticRouter>
                );
                res.render('create',{title:"create",app:markup,__INITIALDATA__:doc})
            }).catch(error=>console.log(error));

});
router.get("/",function(req,res){
    console.log("req.params.id不存在");
    console.log("req.url是"+req.url);
    const markup = ReactDomServer.renderToString(
        <StaticRouter location={req.baseUrl} context={{}}>
            <App obj={null}/>
        </StaticRouter>
    );
    res.render('create',{title:"create",app:markup,__INITIALDATA__: null});
});

router.post('/', upload.array('imagesUpload',10),function(req, res) {
        console.log(req.body);
        console.log(req.files);
        let product = new Product();
        product.clientCode = JSON.parse(req.body.clientCode);
        product.brand = JSON.parse(req.body.brand);
        product.modelNumber = JSON.parse(req.body.modelNumber);
        product.dimensions = JSON.parse(req.body.dimensions);
        product.weight = JSON.parse(req.body.weight);
        product.quantity = JSON.parse(req.body.quantity);
        product.title = JSON.parse(req.body.title);
        product.category = JSON.parse(req.body.category);
        product.description = JSON.parse(req.body.description);
        product.listedPrice = JSON.parse(req.body.listedPrice);
        product.sellingPrice = JSON.parse(req.body.sellingPrice);
        product.reserve = JSON.parse(req.body.reserve);
        product.location = JSON.parse(req.body.location);
        product.stage = JSON.parse(req.body.stage);
        product.status = "Pending List";
        product.SKU = JSON.parse(req.body.SKU);
        console.log(req.body);
        console.log("parse _id "+ req.body._id);
        if(JSON.parse(req.body._id) !== null) {
            product._id = mongoose.Types.ObjectId(JSON.parse(req.body._id));
        }else{
            product._id = null;
        }
        product.images = JSON.parse(req.body.images); //null或者array
        for(let i =0;i<req.files.length;i++){
            product.images.push(req.files[i].path);
        }
        console.log(product.images);
        if(!product.SKU) {
            product.SKU = rand();
        }
        console.log("stage =",req.body.stage);
        if(req.body.stage == 4){ //typeof req.body.stage is String
            product.status = "Item Available";
        }

        console.log("productID是"+product._id);
        if(product._id !== null){
            Product.findOneAndUpdate({_id:product._id},product).then(function(){
                res.send("updated");
            }).catch(error=>{
                console.log(error);
                res.status(400);
                res.send("update Failed");
            });
        }else{
            product.save().then(function(){
                console.log("new Product saved to database");
                res.send("Product created");
            }).catch(error=>{
                console.log(error);
                res.status(400);
                res.send("Create Failed");
            });
        }




});

export default router;