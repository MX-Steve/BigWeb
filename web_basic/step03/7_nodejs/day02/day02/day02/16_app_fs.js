//同步(Synchronize)同步向文件追加数据
//1:加载模块    15:48--15:50
const fs = require("fs");
//2:创建日期类型字符串对象
var str = new Date().toString()+"\r\n";
console.log("1:追加开始");
//3:向文件追加 3.txt appendFileSync
fs.appendFileSync("./3.txt",str);
//4:输出追加结束
console.log("2;追加结束");


