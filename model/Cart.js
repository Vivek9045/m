const mongoose=require("mongoose")
const {Schema}=mongoose

const cartSchema=new Schema({
    product_category:{
        type:String,
        required:true,
        trim:true
    },
    brand:String,
    processor:String,
    ramSize:Number,
    laptop_model:String,
    price:Number,
   timestamp:Number,
    productId:String
})
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;