// // Cross Origin Resource Sharing

// const express = require("express")
// const dotenv = require('dotenv')
// const app = express()
// dotenv.config();

// const port=process.env.PORT || 3001
// const users = [{id: 1,uname : "Admin",password : "manager"}]

// app.use(express.json())

// app.get("/user/:id",(req,res)=>{
//     try{
//         const id = req.params.id
//         const userdata = users.find((user)=>user.id==id)
//         if(!userdata){
//             return res.status(404).json({message : "User not Found"})
//         }
//         res.status(200).json({message : "User found successfully",userdata})
//     }
//     catch(err){
//         res.status(500).json({message : "Failed to find user",Error : err.message})
//     }
// })


// app.get("/users",(_req,res)=>{
//     try{
//         res.status(200).json({message : "User find Sucessfully",users})
//     }
//     catch(err){
//         res.status(500).json({message : "Failed to find user",Error : err.message})
//     }
// })


// app.post("/user/add",(req,res)=>{
//     try{
//         const newUser={
//             id:Date.now(),
//             ...req.body
//         }
//         users.push(newUser);
//         res.status(200).json({message : "User Created Successfully",newUser})
//     }
//     catch(err){
//         res.status(500).json({message : "Failed to Create user",Error : err.message})
//     }
// })


// app.put("/user/edit/:id",(req,res)=>{
//     try{
//         const id = req.params.id
//         const userIndex = users.findIndex((user)=>user.id==id)
//         if(userIndex==-1){
//             return res.status(404).json({message : "User not Found"})
//         }
//         users[userIndex]={
//             ...users[userIndex],
//             ...req.body
//         }
//         res.status(200).json({message : "User Updated Successfully", user: users[userIndex]})
//     }
//     catch(err){
//         res.status(500).json({message : "Failed to Udpate user",Error : err.message})
//     }
// })


// app.delete("/user/delete/:id",(req,res)=>{
//     try{
//         const id = req.params.id
//         const userIndex = users.findIndex((user)=>user.id==id)
//         if(userIndex==-1){
//             return res.status(404).json({message : "User not Found"})
//         }
//         users.splice(userIndex,1)
//         res.status(200).json({message : "User Deleted Successfully"})
//     }
//     catch(err){
//         res.status(500).json({message : "Failed to Delete user",Error : err.message})
//     }
// })


// app.listen(port,()=>{
//     console.log(`Server is running on ${port}`)
// })

const dotenv=require('dotenv');
const express=require('express');
const cors=require('cors');
const DBConnect = require('./config/db.js');
const User = require('./models/user.js');
dotenv.config();
const port=process.env.PORT || 3001;
const app=express();
  app.use(cors());
  DBConnect();
  app.use(express.json());
  app.get("/users",async(req,res)=>{
    try{
   const users=await User.find();
res.status(200).json({message: 'user found successfully',users})   
    }
    catch(err){
 res.status(500).json({message: "failed to fetch user",Error: err.message})       
    }
  })

  app.get("/user/:email",async(req,res)=>{
    try{
        const id=req.params.email;
   const user=await User.findOne({email:id});
   if(!user){
 return res.status(404).json({message: 'user not found'})    
   }
res.status(200).json({message: 'user found successfully',user})   
    }
    catch(err){
 res.status(500).json({message: "failed to fetch user",Error: err.message})       
    }
  })

    app.post("/add",async(req,res)=>{
    try{
        const newUser={...req.body}
   const user=new User(newUser);
        await user.save();
res.status(201).json({message: 'user created successfully',user})   
    }
    catch(err){
 res.status(500).json({message: "failed to create user",Error: err.message})       
    }
  })

  app.put("/edit/:email",async(req,res)=>{
    try{
        const id=req.params.email;
        const data={...req.body};
   const updatedUser=await User.findOneAndUpdate({email:id},data);
   if(!updatedUser){
 return res.status(404).json({message: 'user not found'})    
   }
res.status(200).json({message: 'user updated successfully',updatedUser})   
    }
    catch(err){
 res.status(500).json({message: "failed to update user",Error: err.message})       
    }
  })

    app.delete("/delete/:email",async(req,res)=>{
    try{
        const id=req.params.email;
   const deletedUser=await User.findOneAndDelete({email:id});
   if(!deletedUser){
 return res.status(404).json({message: 'user not found'})    
   }
res.status(200).json({message: 'user deleted successfully',deletedUser})   
    }
    catch(err){
 res.status(500).json({message: "failed to delete user",Error: err.message})       
    }
  })
  app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
  })