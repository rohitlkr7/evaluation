const express = require('express')
// const mongodb =require("mongodb")
// const morgan = require(morgan)
const server=express()
const morgan = require("morgan")

const port=4540;

server.use(morgan("short"))
server.get("/Course",(req,res)=>{
    res.status(200).send("welcome to the our online course plateform")
    console.log(short);
    
})

server.post("/user",(req,res)=>{
    try {
        if(user){
            res.send("wecome folks")
        }else
           res.send("please regester")
    } catch (error) {
        
    }
})

server.listen(port,()=>{
    console.log(`server listen on ${port}`);
    
})