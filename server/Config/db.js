const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config();

const connectDB=async()=>{
    try {
        const con=await mongoose.connect(process.env.MONGO_URL)
        if (con) {
           console.log(`conncection succefull to the database ${con.connection.host}`) 
        }
    } catch (error) {
        console.log(`connection nahi huya ${error}`)
    }
}

module.exports=connectDB