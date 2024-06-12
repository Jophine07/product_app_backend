const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "productId":String,
        "productName":String,
        "productDes":String,
        "productCmp":String
    }
)

let productModel=mongoose.model("Products",schema);
module.exports={productModel}