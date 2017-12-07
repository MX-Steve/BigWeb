const http = require("http");
//1:创建http服务器对象
var server = http.createServer();
//2:绑定监听端口 8080
server.listen(8080);
//3:绑定事件    request (req,res)
server.on("request",function(req,res){
  console.log("node.js服务器启动....");
  console.log("请求并且解析客户端消息...");
  console.log("请求方法:"+req.method);
  console.log("请求地址:"+req.url);
  console.log("请求协议版本:"+req.httpVersion);
  console.log("请求头部"+req.headers);
  //响应消息  17:53--17:58
  res.statusCode = 200;//设应响应状态码
  res.setHeader("Content-Type","text/html;charset=utf-8");
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>Welcome to MySite</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();///通知客户端浏览器响应消息结束了
});