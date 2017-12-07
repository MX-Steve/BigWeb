//1:加载模块
//同步(Synchronize) 向文件内添加数据
const fs = require("fs");
//2:创建当前日期对象字符串
var str = new Date().toString();
//3:将字符串保存 2.log
console.log("1:开始向文件内添加数据");
fs.writeFileSync("./2.log",str);
console.log("2:添加数据结果");


