import express from "express";
const router = express.Router();
import ReactDomServer from "react-dom/server";
import React from "react";
import App from "../shared/App";
import {StaticRouter} from "react-router-dom";
import Product from "../model/product";
/* GET home page. */
router.get('/', function(req, res ) {
        Product.find().then(docs=>{
            const markup = ReactDomServer.renderToString(
                    <StaticRouter location={req.url} context={{}}>
                        <App objs={docs}/>
                    </StaticRouter>
            );
            res.render('home',{title:"home",app:markup,__INITIALDATA__:docs});
        }).catch(error=>{
            console.log("Getting products list failed,error msg is :" + error);
            res.status(500).send("create InitialData failed");
        });
});

export default router;
