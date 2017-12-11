//使用express创建web服务器
const http = require("http");
const express = require("express");
const mysql = require("mysql");
const qs = require("querystring");

//加载指定模块
const bodyParser = require("body-parser");

var app = express();
//将指定模块添加中间件列表
app.use(bodyParser.urlencoded({extended:false}));

var server = http.createServer(app);
server.listen(8080);
//1:GET 获取用户静态网页 /login.html
app.get("/login.html",(req,res)=>{
  res.sendFile(__dirname+"/login.html");
});
//2:POST /user 获取 uname upwd
app.post("/user",(req,res)=>{
var uname = req.body.uname;
var upwd = req.body.upwd;
console.log(uname+":"+upwd);
res.send("ok");
});



