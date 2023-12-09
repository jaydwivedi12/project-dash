const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email :{
        type:String,
        required:true,
    },
    password:{
     type:String,
     required:true,
    },
    type:{
        type:String,
        enum:["professor","student"],
        default:'student',
    },
});

const Users = mongoose.model("allUser", userSchema);
module.exports=Users