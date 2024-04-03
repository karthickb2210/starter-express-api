const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
   mongoose.set('strictQuery',false)
const schema = mongoose.Schema({
    name:String,
    phone:String,
    mail:String,
    district:String
},{
    timestamps:true
})
const usermodel = mongoose.model("usereport",schema)
mongoose.connect("mongodb+srv://mailtokarthick2002:2020peccc145@usereport.t3ftqn3.mongodb.net/datas").then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
})


app.post("/new",async(req,res)=>{
    const data = new usermodel(req.body);
    await data.save();
    res.send({"message":"sucess"})
})

app.listen(5001,()=>{
    console.log("listening to port 5000")
})