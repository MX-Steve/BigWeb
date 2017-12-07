
const http = require("http");
var server = http.createServer();
server.listen(8080);
server.on("request",function(req,res){
  console.log("web服务器接收个请求");
  res.statusCode = 200;
  res.setHeader("Content-Type",
    "text/html;charset=utf-8");
  res.write("<h3>hello nodejs</h3>");
  res.end();//通知客户端响应消息己经结束
});
//http://127.0.0.1:8080/
