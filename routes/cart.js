const express=require("express")
const Cart = require("../model/Cart")
const router=express.Router()
const { v4: uuidv4 } = require('uuid');


router.get("/getproducts",async(req,res)=>{
    let products=await Cart.find()
    res.render("cart",{
        products
    })
})

router.post("/addproduct",async(req,res)=>{
    console.log(req.body);
    const{product_Brand,product_Processor,ram_size,laptop_model,price,timestamp}=req.body
    const obj={
        product_Brand,
        product_Processor,
        ram_size,
        laptop_model,
        // product_name,
        price ,
        timestamp,
        productId:uuidv4() 
    }
    console.log(obj);
    await Cart.create(obj)
    res.redirect("/getproducts")
})

router.get("/delete/:productId",async(req,res)=>{
    let productId=req.params.productId
    await Cart.deleteOne({productId})
    res.redirect("/getproducts")
})

router.get("/update/:productId",async(req,res)=>{
    let productId=req.params.productId
    
    const updateCart=await Cart.findOne({productId})
    
    res.render("updatecart",{
        updateCart:updateCart
    })
})

router.post("/updateCart",async(req,res)=>{
    const{product_Brand,product_Processor,ram_size,laptop_model,price,timestamp,productId}=req.body
    const newObj={
        product_Brand,
        product_Processor,
        ram_size,
        laptop_model,
        // product_name,
        price ,
        timestamp,
        productId
    }
   console.log(newObj);
    await Cart.updateOne({productId},newObj)

    res.redirect("/getproducts")
})

module.exports=router