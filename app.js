var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");


app.use(express.static(__dirname + "/pages"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+"/pages/index.html"));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname+"/pages/login.html"));
});

app.get("/insertData", function(req, res){
    res.sendFile(path.join(__dirname+"/pages/insertData.html"));
});

app.listen(3000, function(){
    console.log("Running on Port 3000");
})