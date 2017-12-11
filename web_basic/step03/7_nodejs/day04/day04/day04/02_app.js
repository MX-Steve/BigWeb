//使用express创建web服务器
const http = require("http");
const express = require("express");

var app = express();
var server = http.createServer(app);
server.listen(8080);

app.get("/",(req,res)=>{
  res.send("<h1>hello nodejs</h1>");
});
app.get("/index",(req,res)=>{
  res.send("<h1>index</h1>");
});
app.get("/user/login",(req,res)=>{
  res.sendFile(__dirname+"/login.html");
});
// path must be absolute or specify root
//http://127.0.0.1/1.jpg
//c:/xampp/htdocs/admin/aa.
app.get("/userlist",(req,res)=>{
  res.json({code:1,msg:"添加成功"});
});
app.get("/userlist1",(req,res)=>{
  res.json([{name:"tom"},{name:"jerry"}]);
});



