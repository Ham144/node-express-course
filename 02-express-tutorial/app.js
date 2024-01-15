const express = require('express')
const {products}= require('./data.js')
const simpleLogic = require('./simpleLogi.js')
const authorize = require('./authorize.js')
const app = express()


//ini contoh middleware tapi biasanya middlaeware file terpisah
app.use([simpleLogic, authorize])

app.get("/", (req,res) =>{
    res.send("<h1>HOME</h1>")
})
app.get("/about", (req,res) =>{
    res.send("<h1>ABOUT</h1>")
})
app.get("/api/products", (req,res) =>{
    res.send("<h1>api(products)</h1>")
})
app.get("/api/items", (req,res) =>{
    res.send("<h1>api(items)</h1>")
})

app.get("/api" ,(req,res) =>{
    res.send("<h1>Api</h1>")
})
app.listen(5000, ()=>{
    console.log(`=========================`)
})