const http = require('http');
const express = require('express');

//let app = function(req, res){}
let app  = express();
//express的本质：一个请求处理对象

let server = http.createServer(app);
server.listen(8080);