
//nodejs 原生模块
const qs = require("querystring");

var str = "uname=tom&upwd=123&pno=3";
//把客户端传递给NODE.JS服务器的查询字符串解析为
//容易使用的对象
var obj = qs.parse(str);
console.log(obj);

//把一个js对象转化为查询字符串
var obj2 = {ename:"强东",age:45,addr:"bj"};
str = qs.stringify(obj2);
console.log(str);