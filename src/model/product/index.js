const mongoose = require("mongoose");
const schema = require("../../schema/product/index");
module.exports = mongoose.model("Product",schema);