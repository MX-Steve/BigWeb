const http = require('http');
const express = require("express");

var app = express();
var server = http.createServer(app);
server.listen(8888);

app.use(function (req,res,next) {
    console.log("0:第0个中间件");
    next();
});

//第一个中间件函数
app.use("/admin",function (req,res,next) {
    console.log("1:第一个中间件");
    console.log(new Date());
    var uid = req.query.uid;
    if(uid == 1){
        next();
    }else{
        res.send("非法访问");
    }
});

//一个访问点有一组中间件
app.use("/user/:id",function (req,res,next) {
    console.log("Request URL:"+req.originalUrl);
    next();
},function (req,res,next) {
    console.log("Request Type:"+req.method);
    next();
});
app.get("/user/:id",function (req,res) {
    console.log("4：用户请求");
    res.send("用户的访问");
});

app.get('/admin',(req,res)=>{
    console.log("2:第一个请求");
    res.send("hello admin");
});

app.get('/',(req,res)=>{
    console.log("3:第二个请求");
    res.send("hello nodejs");
});
