const http = require("http");
var server = http.createServer();//创建一个服务器对象
server.listen(8888);
server.on("request",function (req,res) {
    //req:请求对象
    //res:响应对象
    res.statusCode = 200;
    res.setHeader("content-type","text/html;charset=utf-8");
    res.write("<h1>你好</h1>");
    res.end();
});