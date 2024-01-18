const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Task = require('../models/task');
//created task
router.post("/addtask",async(req,res)=>{
    try {
        const {title,body,id} =req.body;
    const existuser=await User.findById(id);
    console.log(existuser);
    if(existuser){
        const task=new Task({title,body,user:existuser});
        await task.save().then(()=>res.status(200).json({task}));
        existuser.list.push(task);
        existuser.save()
    }
    } catch (error) {
        console.log(error);
    }
})

//update 
router.put("/updatetask/:id",async(req,res)=>{
     try {
    //     const {title,body,email} =req.body;
    // const existuser=await User.findOne({email});
    const {title,body} =req.body;
        const newtask=await  Task.findByIdAndUpdate(req.params.id,{title,body});
         newtask.save().then(()=>res.status(200).json({message:"task updated"}));
    
     } catch (error) {
        console.log(error);
     }
})

//delete
router.delete("/deletetask/:id",async(req,res)=>{
    try {
       const {id} =req.body;
   const existuser=await User.findByIdAndUpdate(id,{$pull:{list:req.params.id}});
   if(existuser){
       const newtask=await  Task.findByIdAndDelete(req.params.id);
       if (newtask) {
        res.status(200).json({ message: "Task deleted" });
    } else {
        res.status(404).json({ message: "Task not found" });
    }
   }
    } catch (error) {
       console.log(error);
    }
})
//getalltask
router.get("/gettask/:id",async(req,res)=>{
    try {
       
        const list = await Task.find({ user: req.params.id }).sort({
            createdAt:-1});
         
        // Check if the list is not empty before sending the response
        if (list.length > 0) {
            res.status(200).json({ list });
        } else {
            res.status(404).json({ message: "No tasks found for the given user ID" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
module.exports=router;
