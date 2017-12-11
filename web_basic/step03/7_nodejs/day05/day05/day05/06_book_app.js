//使用express创建web服务器
const http = require("http");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
//加载对应模块 session cookie
const cookieParser = require("cookie-parser");
const session = require("express-session");
//配置
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(session({
  resave:false,
  saveUninitialized:true,
  secret:"07teducn"
}));
//1:连接连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"dangdang",
  port:3306,
  connectionLimit:25
});
var server = http.createServer(app);
server.listen(8080);

//2:处理请求 注册  16:45--16:50
//post /reg  uname upwd
app.post("/reg",(req,res)=>{
  var uname = req.body.uname;
  var upwd  = req.body.upwd;
  pool.getConnection((err,conn)=>{
     if(err)throw err;
     var sql = "INSERT INTO user VALUES(null,?,md5(?))";
     conn.query(sql,[uname,upwd],(err,result)=>{
       if(err)throw err;
       if(result.affectedRows>0){
         res.json({code:1,msg:"注册成功"});
       }else{
         res.json({code:-1,msg:"注册失败"});
       }
       conn.release();
     });
  })
});

app.post("/login",(req,res)=>{
  var u = req.body.uname;
  var p = req.body.upwd;
  pool.getConnection((err,conn)=>{
    if(err)throw err;
    var sql = "SELECT * FROM user WHERE uname=?";
    sql += " AND upwd=md5(?)";
    conn.query(sql,[u,p],(err,result)=>{
      if(result.length>0){
        //获取用户编号
        //保存session对象中
        var uid = result[0].uid;
        req.session.uid = uid;
        console.log(req.session);
        res.json({code:1,msg:"登录成功"});
      }else{
        res.json({code:-1,msg:"用户名或密码失败"});
      }
      conn.release();
    });
  });
});

app.get("/booklist",(req,res)=>{
   //11:51--11:56
   //1:获取req.session.uid
   //2:如果当前值不存在
   //3:res.json(code:-2,msg:"请登录");
   //4:return;
   if(!req.session.uid){
     res.json({code:-2,msg:"请登录"});
     return;
   }
   pool.getConnection((err,conn)=>{
     if(err)throw err;
     var sql = "SELECT id,name,price FROM book";
     conn.query(sql,(err,result)=>{
       if(err)throw err;
       if(result.length>0){
         res.json({code:1,data:result});
       }else{
         res.json({code:-1,msg:"当记录不存在"});
       }
       conn.release();
     });//10:51--10:56 前端ajax
   });
});




