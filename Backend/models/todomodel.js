const { default: mongoose, model } = require("mongoose");


const todoschema=new mongoose.Schema({
    Text:{type:String,required:true}
})

module.exports=model('todo',todoschema)