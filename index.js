const express = require('express')
const mongoose = require('mongoose')

const Product = require('./mdels')
 const app = express()
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
 mongoose.set('strictQuery',false)
 mongoose.connect("mongodb+srv://mailtokarthick2002:2020peccc145@productdetails.nirabqc.mongodb.net/details")
.then(()=>{
  console.log("Connect to mongodb")
}).catch((e)=>{
  console.log(e);
})
app.post('/',async (req,res)=>{
  const product = await Product.create(req.body) 
  res.send(product)
})
app.get('/',async (req,res)=>{
  const p = await Product.find({});
  res.json(p)
})


app.listen(3000);
