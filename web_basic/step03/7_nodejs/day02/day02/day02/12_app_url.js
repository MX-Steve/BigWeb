//nodejs 原生模块
const url = require("url");
var str = "https://qd:123@www.jd.com:443/ad/index?uname=tom#chapter3";
var obj = url.parse(str);
console.log(obj);

//true:指定使用把URL中查询字符串进一步解析
var obj = url.parse(str,true);
console.log(obj);

