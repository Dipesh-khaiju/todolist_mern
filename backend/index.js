const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
const dotenv = require("dotenv");
const TodoModel = require("./Models/todojsModel.js")
dotenv.config();  
const port=process.env.PORT || 3000;

const app=express();
app.use(express.json());
app.use(cors());

//Mongodb connect
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('connected to MongoDB'))
.catch(err=>console.log(err));

app.get("/",(req,res)=>{
    res.send("This is the backend of todolist")
})
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
app.put("/update/:id",(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>{res.json(err)})
})

app.delete("/delete/:id",(req,res)=>{
    const{id } =req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(()=>console.log("Deleted"))
    .catch(err=>{res.json(err)})
    
})
app.listen(port,()=>{
console.log("server is running in backend");
});
