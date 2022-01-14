const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req,res)=>{
    res.send("First Server in WEB322")
});

app.listen(8080, ()=>{
    console.log("Server listening on: 8080");
});
