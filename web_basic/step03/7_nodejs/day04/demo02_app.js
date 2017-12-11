const http = require('http');
const express = require('express');


let app = express();
let server = http.createServer(app);
server.listen(8888);
app.get('/',(req,res)=>{
    res.send('<h1>nodejs</h1>');
});
app.get('/index',(req,res)=>{
    res.send('<h1>index</h1>');
});
app.get('/user/login',(req,res)=>{
    res.sendFile(__dirname+'/static/login.html');
});
app.get('/userlist',(req,res)=>{
    res.json({"code":1,msg:'添加成功'});
});
app.get('/userlist1',(req,res)=>{
    res.json([{"code":1,msg:'添加成功1'},{"code":2,msg:'添加成功2'}]);
});
//?uname=tom&upwd=112
app.get('/user',(req,res)=>{
    console.log(req.query.uname);
    console.log(req.query.upwd);
    res.send('ok');
});
///user/tom/123;
app.get('/user1/:uname/:upwd',(req,res)=>{
    console.log(req.params.uname);
    console.log(req.params.upwd);
    res.send('ok');
});