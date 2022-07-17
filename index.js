const express = require("express");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const productRoute=require("./routes/product");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();


mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DBConnection successful"))
    .catch((err)=>{
        console.log(err);
    });
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/products",productRoute);
   
app.listen(process.env.PORT||5000,()=>{
    console.log("backend is running!!");
});