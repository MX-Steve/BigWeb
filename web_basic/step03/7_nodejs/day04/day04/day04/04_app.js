//使用express创建web服务器
const http = require("http");
const express = require("express");
const mysql = require("mysql");

//连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  database:"web1708acl02",
  password:"",
  port:3306,
  connectionLimit:25
});

var app = express();
var server = http.createServer(app);
server.listen(8080);

app.get("/role/:rid",(req,res)=>{

   //获取角色id参数
   var rid = req.params.rid;
   //从连接池中租一个连接对象
   pool.getConnection((err,conn)=>{
      if(err)throw err;
      //创建sql语句并且发送sql
      var sql = "SELECT * FROM t_role WHERE rid = ?";
      conn.query(sql,[rid],(err,result)=>{
         if(err)throw err;
         res.json(result[0]);
         //释放连接对象->归还连接对象
         conn.release();
      });
   });
});
