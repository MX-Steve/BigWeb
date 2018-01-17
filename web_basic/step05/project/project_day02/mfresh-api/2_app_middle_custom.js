const http = require('http');
const express = require('express');

let app = express();
let server = http.createServer(app);
server.listen(3000);

/**定义中间件函数**/
app.use(function(req, res, next){
    console.log('middleware - 1');
    /*if(....){
        next();
    }else {
        console.log('err');
    }*/
    next();  //调用中间件栈中的下一个中间件函数
});

app.use(function(req, res, next){
    console.log('middleware - 2');
    ///if....else...
    next();
});

/**路由定义**/
app.get('/newslist', function(req, res, next){
    console.log('GET /newslist');
    res.send('GET /newslist');
    next();
})

app.get('/newsdetail', function(req,res,next){
    console.log('GET /newsdetail');
    res.send('GET /newsdetail');
    next();
});

/**后置中间件**/
app.use(function(req, res, next){
    console.log('middleware - 3');
    next();
});