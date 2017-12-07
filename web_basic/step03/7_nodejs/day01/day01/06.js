//创建06.js 14:55-14:58
//创建07.js 加载06.js并且调用函数 userLogin

var userCount = "金条";
var userLogin = function(){
  console.log("赵金多");
}
//变量    银行存款
var bank = 100000000;
var bike = function(){
  console.log("七手自行车");
}
//exports.bike = bike;
module.exports.bike = bike;
//函数    七手自行车-->
//导出    成员名       值
//exports.userLogin = userLogin;
//exports.uCount = userCount;
