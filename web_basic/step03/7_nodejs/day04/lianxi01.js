const http = require('http');
const mysql = require('mysql');
const fs = require('fs');
const url = require('url');

//创建动态服务器，接收如下请求URL
/** get:req.query.uname  用户名
    /register.html
    /register.do
    /login.html
    /login.do
    /userlist.html
    /userlist.do
    其他  404.html
 */
let conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'web1708acl02',
    port:3306
});


let server = http.createServer();
server.listen(8888);
server.on('request',function (req,res) {
    var obj = url.parse(req.url,true);
    var path =obj.pathname;

    if(path == '/login.html'){
        fs.readFile('./public/index.html',function (err,data) {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(path == '/register.html'){
        fs.readFile('./public/register.html',function (err,data) {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(path == '/userlist.html'){
        fs.readFile('./public/userlist.html',function (err,data) {
            if(err) throw err;
            res.write(data);
            res.end();
        });
    }else if(path == "/register.do"){

        var uname = obj.query.uname;
        var upwd = obj.query.upwd;
        // console.log(uname,upwd);
        var sql = "INSERT INTO t_user VALUES (null,?,md5(?))";
        conn.query(sql,[uname,upwd],function (err,result) {
            if(err) throw err;
            if(result.affectedRows > 0){
                res.setHeader("Content-Type","text/html;charset=utf-8");
                res.write("<h1>添加成功!</h1>");
            }
            res.end();
        })
    }else if(path == '/login.do'){

    }else if(path == '/userlist.do'){

    }else{
        fs.readFile('./public/404.html',function (err,data) {
            if(err) throw err;
            res.statusCode = 404;
            res.write(data);
            res.end();
        });
    }
});