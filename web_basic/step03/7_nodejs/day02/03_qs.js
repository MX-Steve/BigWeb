const qs = require('querystring');

var str = "name=tom&pwd=123";
var obj = qs.parse(str);
console.log(obj);
var newStr = qs.stringify(obj);
console.log(newStr);

const url = require('url');

var s = "http://www.baidu.com:8080/index/news?uname=tom&upwd=123";
var obj = url.parse(s);
// console.log(obj);
var obj = url.parse(s,true);
// console.log(obj);

var buf1 = Buffer.alloc(1024*2);
// console.log(buf1);
// console.log(buf1.length);

var buf2 = Buffer.from([10,20,30]);

var buf3 = Buffer.from('一二三');
// console.log(buf2);
// console.log(buf3.toString());

const fs = require('fs');

console.log("开始进行文件的读取");
var data = fs.readFileSync("./note.txt");
console.log(data.toString());
console.log("文件读取结束");

var now = new Date();

//fs.writeFileSync('./log/2.log',now);
fs.appendFileSync('./log/2.log',now);








