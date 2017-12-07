const fs = require("fs");

//异步:Asynchronize 写操作
//node.js解释器与磁盘可以同时工作
var str = new Date().toString();
//function(err){} 回调函数
//当文件写入完成,调用函数，如果出错将错误信息保存 err

console.log("1:写操作开始");
fs.writeFile("./4.txt",str,function(err){
   if(err){
     throw err;
   }
   console.log("2:写操作完成");
});
console.log("3:写操作结束")

