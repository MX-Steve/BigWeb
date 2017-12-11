const http = require("http");
const express = require("express");

var app = express();
var server = http.createServer(app);
server.listen(8888);

app.use("/userlist/:uid",function (req,res,next) {
    var uid = req.params.uid;
    if(uid < 10){
        next();
    }else{
        res.send("非法访问");
    }
});

app.get("/userlist/:uid",function (req,res) {
    console.log("用户列表页面");
    res.send("用户列表页面");
});

var router1 = express.Router();

router1.get("/list",function (req,res,next) {
    res.send("用户列表");
});
router1.get("/del",function (req,res,next) {
    res.send("删除用户列表");
});


app.use("/user",router1);