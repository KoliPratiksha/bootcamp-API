const mongoose = require('mongoose')

const bootcampschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    days:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('bootcamp', bootcampschema)