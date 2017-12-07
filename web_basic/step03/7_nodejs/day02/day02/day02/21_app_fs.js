const fs = require("fs");

//异步:Asynchronize 复制
//node.js解释器与磁盘可以同时工作
var src = "./p3.png";
var des = "./p31.backup.png";

console.log("1:复制开始")
fs.readFile(src,function(err,data){
  if(err)throw err;
  console.log("2:创建新文件并且添加内容");
  fs.writeFile(des,data,function(err){
    if(err)throw err;
  })
});
console.log("3:复制结束")