const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const routerNews = require('./router/news');

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
}));
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


/**使用路由器中间件**/
app.use('/news', routerNews);