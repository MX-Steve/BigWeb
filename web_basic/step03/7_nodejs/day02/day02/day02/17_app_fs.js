//同步(Synchronize)同步向文件追加数据
const fs = require("fs");
//var src = "./3.txt";
//var des = "./3.backup.txt";
//var src = "./p3.png";
//var des = "./p3.backup.png";
//var src = "./am.docx";
//var des = "./am.backup.docx";
var src = "./birds.mp4";
var des = "./birds.backup.mp4";


console.log("1:复制文件的开始");
//1:读取文件内容
var data = fs.readFileSync(src);
//2:添加止新文件写
fs.writeFileSync(des,data);
console.log("2:复制文件的结束");


