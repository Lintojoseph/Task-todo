const { default: mongoose } = require("mongoose");
const bcrypt=require('bcrypt')


const userschema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    password:{type:String,required:true}
})

userschema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) {
      return next();
    }
  
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
  
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
  
        user.password = hash;
        next();
      });
    });
  });

module.exports=mongoose.model("user", userschema);
