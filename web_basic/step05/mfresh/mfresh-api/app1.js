const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require("express-session");



let app = express();
let server = http.createServer(app);
server.listen(8888);
/* 定义中间件函数:返回所有静态页面 */

//让服务器支持session处理
app.use(session({resave:false,saveUninitialized:true,secret:"lihan home"}));

// console.log(express.static);
app.use( express.static('./public') );

//将post请求主体中的数据封装到body中
app.use( bodyParser.urlencoded({extended:false}) );//application/x-www-form-urlencoded

//将请求头部中的cookie数据封装到req.cookies中
app.use(cookieParser());



app.post('/register',function(req,res){
    console.log('post /register');
    // console.log(req.query);//{}
    // console.log(req.body);//{ uname: 'tom', upwd: '123' }
    //console.log(req.cookies);//undefined{ uname: 'tom', lastLoginTime: '1511452771012' }
    console.log(req.session);
    //查看用户访问了几次
    if(req.session.registerCount){
        req.session.registerCount++;
    }else{
        req.session.registerCount = 1;
    }
    res.send('您在当前回话中已经访问的次数：'+req.session.registerCount);
}); 

app.get('/userlist',function(req,res,next){
    let data = [
        {uid:101,uname:'tom'},
        {uid:102,uname:"mary"},
        {uid:103,uname:'king'}
    ];
    res.json(data);
});
