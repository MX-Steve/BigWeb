const fs = require("fs");

//异步:Asynchronize 追加操作
//node.js解释器与磁盘可以同时工作
var str = new Date().toString()+"\r\n";
//function(err){} 回调函数
//当文件写入完成,调用函数，如果出错将错误信息保存 err

console.log("1:追加操作开始");
fs.appendFile("./5.txt",str,function(err){
   if(err){
     throw err;
   }
   console.log("2:追加操作完成");
});
console.log("3:追加操作结束");