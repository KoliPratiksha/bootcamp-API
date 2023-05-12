
require('dotenv/config')
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const User_route = require('./route/userroute')
const Bootcamp_route = require('./route/bootcampRoute')

const app = express()

// midleware
app.use(express.json())
app.use(cors())

app.use('/api/user',User_route)
app.use('/api/bootcamp',Bootcamp_route)

// default
app.get('/',(req,res)=>{
    res.send("This is home")
})

app.listen(process.env.PORT,()=>{
    console.log("Listening on Port 5000");
})

async function main(){
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
main()