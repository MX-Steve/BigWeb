const http = require('http');
const express = require('express');

let app = express();

let server = http.createServer(app);
server.listen(8888);
/* 定义中间件函数 */

app.use(function(req,res,next){
    console.log('middleware - 1');
    next();
});
app.use(function(req,res,next){
    console.log('middleware - 2');
    next();
});

/**
 * 路由定义
 */
//get /newslist?pno=2
app.get('/newslist',function(req,res,next){
    // let pno = req.query.pno || '1';
    // // console.log(typeof pno);
    // res.send(pno);
    console.log("get /newslist");
    res.send('get /newslist');
    next();
});

//get /newsdetail?nid=2
app.get('/newsdetail',function(req,res,next){
    // let nid = req.query.nid;
    // if(nid){
    //     //TODO:根据编号查询数据库
    //     res.json({});
    // }else{
    //     res.json({nid:0,title:'未指定的新闻',pubTime:0,content:'未指定的新闻内容'});
    // }
    console.log('get /newsdetail');
    res.send('get /newsdetail');
});
app.use(function(req,res,next){
    console.log("middleware - 3");
    next();
});
