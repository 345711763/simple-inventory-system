const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
   status: String,
   SKU:Number,
    condition: String,
    clientCode:String,
    brand:String,
    modelNumber:String,
    dimensions:String,
    weight:Number,
    quantity:Number,
    title:String,
    category:String,
    description:String,
    images:[String],
    listedPrice:Number,
    sellingPrice:Number,
    reserve:Number,
    location:String,
    paymentMethod:String,
    transactionDetails:String,
    amountReceived: String,
    stage: Number
});

module.exports = schema;