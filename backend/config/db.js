const mongoose = require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connect Successful!")
    }catch(err){
        console.log("Error when connecting to db")
        console.log(err)
    }
}

module.exports = connectDB