import express from "express";
import ReactDomServer from "react-dom/server";
import React from "react";
import {StaticRouter} from "react-router-dom";
import App from "../shared/App";
import Product from "../model/product";
const router = express.Router();
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

export default router;