const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
  
app.get("/", function(req,res){
  res.sendFile("/home/runner/AsimpleForm/index.html");
});

app.post("/", function(req, res){
  console.log(`Name: ${req.body.name}`);
});

app.listen(3000, function(){
  console.log("Server started!");
})