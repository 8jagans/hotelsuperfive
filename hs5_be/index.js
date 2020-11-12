const express = require('express')
const bodyparser = require('body-parser')
const mysql = require("mysql")
const app = express()
const cors=require('cors')

const db=mysql.createPool({
    host:"localhost",
    password:"Jagan@2002",
    user:"root",
    database:"hotelsuperfive"
})

app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
var fn = null;

app.post("/ins",(req,res)=>{
    fn=req.body.firstname;
    const ln=req.body.lastname;
    const mn=req.body.mobile;
    const dob=req.body.dob;
    const adrs=req.body.address;
    //const i="204";
    const s="insert into personald(firstname,lastname,dob,mobileno,address) values(?,?,?,?,?)";
    const t= "insert into final_personald(firstname,lastname,dob,mobileno,address) values(?,?,?,?,?)";
    db.query(s,[fn,ln,dob,mn,adrs],(e,result)=>{
        console.log(e);
        console.log(result);
    })
    db.query(t,[fn,ln,dob,mn,adrs],(e,result)=>{
        console.log(e);
        console.log(result);
    })
})
app.post("/bok",(req,res)=>{
    const price=req.body.total;
    const s="insert into booking(totalprice) values(?)";
    db.query(s,[price],(e,result)=>{
        console.log(e);
        console.log(result);
    })
    const t="insert into final_booking(totalprice) values(?)";
    db.query(t,[price],(e,result)=>{
        console.log(e);
        console.log(result);
    })
})

app.post("/trunk",(req,res)=>{
    const s = "TRUNCATE TABLE booking";
    db.query(s,(e,result)=>{
        console.log(e);
        console.log(result);
    })
    const t = "TRUNCATE TABLE personald";
    db.query(t,(e,result)=>{
        console.log(e);
        console.log(result);
    })
})

app.get("/fin",(req,res)=>{
    const s="SELECT firstname,lastname,dob,mobileno,address,totalprice FROM booking b,personald a where a.id=b.id and firstname=?;";
    db.query(s,[fn],(e,result)=>{
        console.log(e);
        console.log(result);
        res.send(result);
    })

})

app.listen(3001,()=>{
    console.log("running");
})