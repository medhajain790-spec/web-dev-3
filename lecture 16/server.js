const express=require("express");
const morgan=require("morgan");
const app=express();
const PORT=3000

app.use(morgan())

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}) 

const logMiddleware=(req,res,next)=>{
    req.name="john";
    console.log("Request url:",req.url,"req.method:",req.method,
    "Time:", new Date().toLocaleDateString());
    next();
}
    
app.use(logMiddleware);

app.get("/",(req,res)=>{
    console.log("Request name:")})


    const apiCheckMiddleware=(req,res,next)=>{
        if(req.query.API_KEY==="1234"){
            console.log("Authenticated")
        }
      
    }



    app.get("/",(req,res)=>{
    console.log("Request name:",req.name)
    console.log("Hello World");
    res.send("Hello Data")
})

 app.get("/data",(req,res)=>{
    console.log("Hello Data");
    res.send({
        city: "New York",
        country: "USA",
        temp:32,
        humidity:80
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
