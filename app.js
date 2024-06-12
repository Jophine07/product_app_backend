const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const product=require("./models/product.js")

const app=express()
app.use(cors())

app.post("/",(req,res)=>{
    res.send("Hi")
})

app.get("/SearchProdct",(req,res)=>{
    res.send("Hello")
})

app.get("/DeleteProduct",(req,res)=>{
    res.send("Hey")
})

app.get("/ViewProduct",(req,res)=>{
    res.send("Haiii")
})

app.listen(8800,()=>{
    console.log(" Server Started")
})

