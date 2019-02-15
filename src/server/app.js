import mongoose from "mongoose";
require('dotenv').config();
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from '../routes/index';
import createRouter from "../routes/create";
import productRouter from "../routes/product";
import updateRouter from "../routes/update";
const app = express();

console.log(process.env.DB_URI);
mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true });
const db = mongoose.connection;

db.on("open",()=>{
    console.log("MongoDB is opened");
});
db.on("error",(error)=>{
    console.log(error);
});

app.set('view engine','ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/create',createRouter);
app.use('/update',updateRouter);
app.use('/product',productRouter);
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
const port = process.env.PORT || 3000;

app.listen(port,function(){
  console.log(`Server is listening on port ${port}`);
});
