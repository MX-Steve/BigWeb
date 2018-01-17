console.log('开始创建WebServer');

//引入官方提供的模块
const http = require('http');

//使用http模块提供的API创建Web服务器
let server = http.createServer(function(req, res){
  console.log('接收到一个客户端请求');
  //console.log(arguments);

  /****开始处理请求消息——HTTP Request****/
  //读取请求方法
  console.log("请求方法：",  req.method);
  //读取请求URL
  console.log("请求地址：", req.url);
  //读取请求协议版本
  console.log("请求协议：", req.httpVersion);
  //读取请求消息头部
  console.log("请求头部：", req.headers);

  /****向客户端发回响应消息——HTTP Response****/
  //输出响应状态码，输出响应头部
  res.writeHead(200, {'Content-Type':'text/html'});
  //输出响应主体
  res.write('<h3>Hello MySite</h3><hr>');
  //通知客户端响应消息输出结束
  res.end();
});
//让服务器监听指定的端口——启动服务器
server.listen(8080);