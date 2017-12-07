
//文件模块与目录模块同名..文件模块优先级别高一些
var m1 = require("./m7");
var m2 = require("m7");
console.log(m1.age);
console.log(m2.age);