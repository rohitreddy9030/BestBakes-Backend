//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require("mongoose");

const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/test", function(req, res){
  console.log("Hello! from backend /");
  res.statusCode = 200;
  res.statusMessage = "Success";
  res.json({
    "Payload": "Test response successfully received."
  });
  res.send({
    //console.log("Hello from Response Send");
    "Payload": "Test response successfully received."
  });
});

app.listen(process.env.PORT||8089, function(){
  console.log("Server started on port 8089");
});
