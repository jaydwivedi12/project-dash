const express=require("express")
const morgan=require("morgan")
const authRouter=require("./Routes/authRouter")
const connectDB=require("./Config/db")
const app=express();


app.use(morgan(':method :host :status :res[content-length] - :response-time ms'))
app.use(express.json());

connectDB();

app.get("/",function(request,response){
    response.send("hello i am backend")
})

app.use("/api/auth",authRouter)

app.listen(8080,()=>{
    console.log("server is connected to port 8080")
})