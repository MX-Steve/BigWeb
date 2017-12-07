//web1708acl02
//1:加载模块 http url mysql fs
const http = require("http");
const url = require("url");
const mysql = require("mysql");
const fs = require("fs");
//2:创建数据库连接
var conn = mysql.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"web1708acl02",
  port:3306
});
//3:创建服务器对象
var server = http.createServer();
server.listen(8081);
server.on("request",function(req,res) {
  res.setHeader("Content-Type","text/html;charset=utf-8")
  //解析url地址
  var obj = url.parse(req.url, true);

  //获取用户访问路径
  var path = obj.pathname;
  if (path == "/register.html") {
    fs.readFile("./public/register.html", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (path == "/register.do") {
    var uname = obj.query.uname;
    var upwd = obj.query.upwd;
    var sql = "INSERT INTO t_user VALUES(null,?,md5(?))";
    conn.query(sql, [uname, upwd], function (err, result) {
      if (err)throw err;
      if (result.affectedRows > 0) {
        res.write("<h1>添加成功</h1>");
        res.end();
      }
    });
  } else if (path == "/login.html") {
    fs.readFile("./public/login.html",function(err,data){
      if(err)throw err;
      res.write(data);
      res.end();
    });
  }else if(path == "/login.do"){
    //17:47--17:52
    var uname = obj.query.uname;
    var upwd  = obj.query.upwd;
    var sql = "SELECT * FROM t_user ";
    sql += " WHERE uname=? AND upwd=md5(?)";
    conn.query(sql,[uname,upwd],function(err,result){
      if(err)throw err;
      if(result.length>0){
        res.write("<h3>登录成功</h3>");
        res.end();
      }else{
        res.write("<h3>用户名或密码有误</h3>");
        res.end();
      }
    });
  }else{
    fs.readFile("./public/404.html",function(err,data){
      res.write(data);
      res.end();
    });
  }

});