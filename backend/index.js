const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
const TodoModel = require("./Models/todojsModel.js")
  
const app=express();
app.use(express.json());
app.use(cors());

//Mongodb connect
mongoose.connect("mongodb://127.0.0.1:27017/todo_mern")
.then(()=>console.log('connected to MongoDB'))
.catch(err=>console.log(err));


app.get("/get",async (req,res)=>{
   const data = await TodoModel.find()
    .then((result)=>{res.json(result);
        console.log(result)})
        
    .catch(err=>res.json(err));

})
//post req
app.post("/add",(req,res)=>{
    const task =req.body.task;
    TodoModel.create({
        task:task

    }).then(result=>res.json(result))
    .catch(err=>{res.json(err)})
})

app.listen(3000,()=>{
console.log("server is running in backend");
});