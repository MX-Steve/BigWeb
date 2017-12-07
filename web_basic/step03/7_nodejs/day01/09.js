const resolve = require('./08_myurl');
var url = "http://www.jd.com:8080/ad/index?uname=tom&pno=3";
var obj = resolve.resolve(url);
console.log(obj);