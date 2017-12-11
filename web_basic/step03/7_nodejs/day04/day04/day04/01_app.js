//使用express创建web服务器
//1:加载二个模块 express http
const http = require("http");
const express = require("express");
//2;创建express对象
var app = express();
//3:创建服务器对象
var server = http.createServer(app);
//4:绑定监听端口
server.listen(8080);
