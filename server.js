const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.post("/answer",(req,res)=>{

    let data=req.body;

    let responses=[];

    if(fs.existsSync("responses.json")){
        responses=JSON.parse(fs.readFileSync("responses.json"));
    }

    data.timeSubmitted=new Date();

    responses.push(data);

    fs.writeFileSync("responses.json",JSON.stringify(responses,null,4));

    res.json({success:true});

});

app.listen(3000,()=>{
    console.log("Server running");
});