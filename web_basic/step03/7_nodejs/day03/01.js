const http = require('http');
var server = http.createServer();
server.listen(8888);
server.on('request',function (req,res) {
    console.log('接收到客户端请求');
    res.statusCode = 200;
    res.setHeader("content-type","text/html;charset=utf-8");
    res.write("<h1>hello world</h1>");
    res.end();
});