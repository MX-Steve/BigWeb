const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer();
server.listen(8888);
server.on('request',function (req,res) {
    console.log('接收到客户端请求');
    var obj = url.parse(req.url);
    // console.log(obj);
    var path = obj.pathname;
    if(path == 'index'){
        console.log(1);
        fs.readFile('./public/index.html',function (err,data) {
            if(err) throw err;
            res.statusCode= 200;
            res.setHeader("content-type","text/html;charset=utf-8");
            res.write(data);
            res.end();
        });
    }else{
        res.statusCode = 404;
        res.setHeader("content-type","text/html;charset=utf-8");
        res.end("<h1>404</h1>");
    }
});