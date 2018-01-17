/*
午间练习：使用HTTP模块接收不同的请求URL，服务器返回不同的响应消息主体
    /index
    /user/login
    /user/register
*/
const http = require('http');

//请求处理函数——接收客户端请求消息，输出响应消息
let app = function(req, res){
    console.log('WebServer-2接收到一个客户端请求');

    let url = req.url; //客户端请求地址
    if(url==='/index'){
        res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
        res.end('<h1>欢迎访问我的首页</h1><hr>')
    }else if(url==='/user/login'){
        res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
        res.end('<h3>用户登录</h3>');
    }else if(url==='/user/register'){
        res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
        res.end('<h3>注册新用户</h3>');
    }else {
        res.writeHead(404, {'Content-Type':'text/html;charset=UTF-8'});
        res.end('您访问的页面不存在：'+url);
    }
}

let server = http.createServer(app);
server.listen(8080);





console.log('WebServer-2开始运行');
