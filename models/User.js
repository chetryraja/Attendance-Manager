const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const UserSchema = new mongoose.Schema(
    {

        Firstname:{
            type: String,
            required:true,
            minlength: 1,
        },

        Lastname:{
            type: String,
            required: true,
            minlength: 1,
        },

        Roll_number:{
            type:Number,
            required:true,
        },

        department:{
            type: String,
            required: true,
            minlength: 1,
        },

        email: { 
            type: String, 
            required:true, 
            unique: true, 
            match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"]
        },

        password:{
            type:String,
            requried:[true,"Please provide password"],
            minlength:8,
        },

        total:{
            type: Number,
            default: 0,
        },

        present:{
            type: Number,
            default:0,
        },
        picture:{
            type: Buffer,
            default: Buffer.from('default binary data')
        }
    }
)

module.exports=mongoose.model('User',UserSchema);