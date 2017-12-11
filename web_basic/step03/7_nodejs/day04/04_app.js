const http = require('http');
const express = require('express');
const mysql = require('mysql');
const qs = require('querystring');

var pool = mysql.createPool({
    host:'127.0.0.1',
    database:'web1708acl02',
    user:'root',
    password:'',
    port:3306,
    connectionLimit:25
});

var app = express();
var server = http.createServer(app);
server.listen(8888);

app.get('/role/:rid',(req,res)=>{
    var rid = req.params.rid;
    var conn = pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "SELECT * FROM t_role WHERE rid = ?";
        conn.query(sql,[rid],function (err,result) {
            if(err) throw err;
            res.json(result);
            conn.release();
        });
    })
});

app.get('/user/login',(req,res)=>{
     res.sendFile(__dirname+"/public/login.html");
});

//方法1：
app.post('/user/login.do',(req,res)=>{
    req.on("data",function (buf) {
        var obj = qs.parse(buf.toString());
        console.log(obj);
        res.send('ok');
    });
});
//方法2：
/*
1.引入body-parser模块
2.将模块添加到中间件列表
3.在post中获取参数：
    app.post('/user',(req,res)=>{
        var uname = req.body.uname;
    });
 */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.post('/user/login.do1',(req,res)=>{
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    console.log(uname,upwd);
    res.send('ok');
});
/**
    app.put(url,(req,res)=>{});
    app.delete(url,(req,res)=>{});

 */