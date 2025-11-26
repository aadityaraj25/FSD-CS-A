import express from "express";
const app = express();

const user = [{id:1,name:"username1"}]

app.get("/data",(req,res)=>{
    try{
        res.status(200).json({message: "find all users",user})
    }
    catch(err){
        res.status(404).json({message : "failed to fetch users",Error: err.message})
    }
})

app.get("/:id",(req,res)=>{
    try{
        const id = req.params.id
        const userdata = user.find((data)=> data.id == id)
        if(!userdata){
            res.status(200).json({message : "User not found"})
        }
        else{
        res.status(200).json({message: "find all users",user})
        }
    }
    catch(err){
        res.status(404).json({message : "failed to fetch users",Error: err.message})
    }
})

const port = 3001
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})