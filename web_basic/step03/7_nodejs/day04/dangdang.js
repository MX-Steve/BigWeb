const http = require('http');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
let app = express();

let server = http.createServer(app);
server.listen(8888);
let pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'dangdang',
    connectionLimit:25
});

//加载对应的模块session/cookie
//配置
const cookieParser  = require('cookie-parser');
const session = require('express-session');


//增加三个中间件
//1.session
//2.cookie
//3.cors


app.use(cookieParser());
app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:'lihanzhijia'
}));






//处理post请求获取参数
app.use(bodyParser.urlencoded({extended:false}));

//处理所有静态请求
app.use(express.static('static'));




//1.处理请求，注册
app.post('/reg',(req,res)=>{
    var uname = req.body.uname;
    var upwd = req.body.upwd;

    pool.getConnection(function (err,conn) {
        if(err) throw err;
        var sql = "INSERT INTO user VALUES(null,?,md5(?))";
        conn.query(sql,[uname,upwd],function (err,result) {
            if(err) throw err;
            if(result.affectedRows>0){
                res.send({code:1,msg:'注册成功'});
            }else{
                res.send({code:-1,msg:'注册失败'});
            }
            conn.release();
        });
    })

});

app.post('/login',(req,res)=>{
    var uname = req.body.uname;
    var upwd = req.body.upwd;

    pool.getConnection(function (err,conn) {
        if(err) throw err;
        var sql = "SELECT * FROM user WHERE uname=? AND upwd=md5(?)";
        conn.query(sql,[uname,upwd],function (err,result) {
            if(err) throw err;


            if(result.length > 0){
                //获取用户编号，保存在session中
                var uid = result[0].uid;
                req.session.uid = uid;
                res.json({code:1,msg:'登录成功'});
            }else{
                res.json({code:-1,msg:'登录失败'});

            }
            conn.release();
        });
    })

});

app.get('/booklist',(req,res)=>{
    //1.获取session.uid的值
    //2.如果当前值不存在
    //3.res.json({code:-2,msg:"请登录"});
    //4.return;
    if(!req.session.uid){
        res.json({code:-2,msg:"请登录"});
        return;
    }

    pool.getConnection(function (err,conn) {
        if(err) throw err;
        var sql = "SELECT bid,title,price FROM book";
        conn.query(sql,function (err,result) {
            if(err) throw err;
            if(result.length>0){
                res.send({code:1,data:result});
            }else{
                res.send({code:-1,msg:"当前记录不存在"});
            }
            conn.release();
        });
    })
});