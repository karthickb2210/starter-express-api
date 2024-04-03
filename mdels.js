const mongoose = require('mongoose')


const productSchema = mongoose.Schema(
    {
        id : {
            type : String,
            required : [true,"Please enter the id"] 
        },
        name:{
            type : String,
            required : true
        },
        category:{
            type : String,
            required : true
        },
        image:{
            type : String,
            required : true
        } ,
        price:{
            type : String,
            required : true
        },
        des:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)
const Product = mongoose.model('Product',productSchema);
module.exports = Product;