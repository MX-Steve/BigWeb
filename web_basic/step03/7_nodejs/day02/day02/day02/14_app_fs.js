//1:加载模块fs
const fs = require("fs");

//同步(Synchronize)读取文件的内容
//nodejs解析器<-->磁盘
//一个工作-->另一个等待
console.log("1:开始进行文件读取....");
var data = fs.readFileSync("./index.html");
console.log("2:文件读取完成");
console.log(data);
//2:读取文件内容
console.log("3:"+data.toString());



//常见错误:
//Error: ENOENT: no such file or directory
//没有匹配文件或目录
//./index.html 没找到
