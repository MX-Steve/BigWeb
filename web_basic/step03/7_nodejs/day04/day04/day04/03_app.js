//使用express创建web服务器
const http = require("http");
const express = require("express");

var app = express();
var server = http.createServer(app);
server.listen(8080);
// GET /user?uname=tom&upwd=123
app.get("/user",(req,res)=>{
   console.log(req.query.uname);
   console.log(req.query.upwd);
   res.send("ok");
});
//GET /user1/web/1001
app.get("/user1/:type/:id",(req,res)=>{
   console.log(req.params.type);
   console.log(req.params.id);
   res.send("ok");
});
