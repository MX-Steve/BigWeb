const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

let app = express();
let server = http.createServer(app);
server.listen(3000);

/**使用第三方中间件**/
//将POST请求主体中的数据封装到req.body中
app.use( bodyParser.urlencoded({extended:false}) );
//将请求头部中的Cookie数据封装到req.cookies中
app.use( cookieParser() );
//让服务器支持Session处理
app.use( session({
    resave: false,
    saveUninitialized: true,
    secret: '06teducn'
}) );
//允许指定来源的跨域资源访问
app.use( cors({
    //Access-Control-Allow-Origin
    origin: "http://127.0.0.1",
    //Access-Control-Allow-Credentials
    credentials: true
}) );

/**使用官方中间件**/
//向客户端输出静态资源的中间件
app.use( express.static('./public') );


/**定义路由**/
app.post('/register', function(req, res){
    console.log('POST /register');
    //console.log(req.query); //{}
    //console.log(req.body);    //undefined
    //console.log(req.cookies); //undefined
    //console.log(req.session);   //undefined
    if(req.session.registerCount){
        req.session.registerCount++;
    }else {
        req.session.registerCount = 1;
    }
    res.send('您在当前会话中已经访问注册页面的次数：'+req.session.registerCount);
})

app.get('/userlist', function (req, res) {
    let data = [
        {uid:101,uname:'tom'},
        {uid:102,uname:'mary'},
        {uid:103,uname:'king'}
    ];
    /*res.header('Access-Control-Allow-Origin', "http://127.0.0.1");
    res.header('Access-Control-Allow-Credentials', true);*/
    res.json(data);
});