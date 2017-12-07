//加载http模块
const http = require("http");
const fs = require("fs");
const url = require("url");
//创建服务器对象
var server = http.createServer();
server.listen(8080);
server.on("request",function(req,res){
 //根据客户端请注URL地址不同，返回不同响应消息
 //req.url
 var obj = url.parse(req.url);
 var path = obj.pathname;

 if(path=="/index.html"){
   res.statusCode = 200;
   res.setHeader("Content-Type","text/html;charset=utf-8");
   fs.readFile("./index.html",function(err,data){
     res.write(data);
     res.end();
   });
 }else{
   res.statusCode = 404;
   res.setHeader("Content-Type","text/html;charset=utf-8");
   fs.readFile("./404.html",function(err,data){
     res.write(data);
     res.end();
   });
 }
});