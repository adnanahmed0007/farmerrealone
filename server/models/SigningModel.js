import mongoose from "mongoose";
import express from "express"
const SigningMode=mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,

    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phoneNumber:{
        type:Number,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
    }

,{
    timestamps:true
})
 const  UserSiging=mongoose.model("SigningFarmer",SigningMode);
 export default UserSiging;