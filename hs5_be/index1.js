const express=require('express');
const bodyparser=require('body-parser');
const mysql=require("mysql");
const app=express()
const cors=require('cors');

const db=mysql.createPool({
    host:"localhost",
    password:"1234",
    user:"root",
    database:"booking"
})
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

/*
app.get("/",(req,res)=>{
    const s1="2";
    const b="bebin";
    const s="insert into studies value (?,?)";
    db.query(s,[s1,b],(err,result)=>{
         console.log(err);
        console.log(result);
    })
    res.send("Hello world");
})
*/

app.post("/insert",(req,res)=>{
    const s1=req.body.total;
    const s="insert into summa (price) value(?)";
    db.query(s,[s1],(err,result)=>{
         console.log(err);
        console.log(result);
    })
    
})

app.listen(3001,()=>{
    console.log("running");
})
