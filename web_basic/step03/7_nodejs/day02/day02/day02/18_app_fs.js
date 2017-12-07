const fs = require("fs");

//异步:Asynchronize 读取文件内容
//node.js解释器与磁盘可以同时工作
console.log("1:开始读取文件内容...");
//function(err,data){}
//回调函数：当文件读取结束调用函数->data文件内容
fs.readFile("./3.txt",function(err,data){
  console.log("2:文件读取完成了");
  if(err){
    console.log("4:读取文件出现了错误");
    throw err;
  }else{
    console.log("5:文件读取成功");
    console.log(data);
  }
});
console.log("3:读取内容结束");
