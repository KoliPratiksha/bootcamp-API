const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('usergame',userschema)