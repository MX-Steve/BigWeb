//1:加载mysql模块
const mysql = require("mysql");
//2:创建数据库连接
var conn = mysql.createConnection({
  host:"127.0.0.1",    //数据库所在主机地址
  user:"root",         //进入mysql系统用户名
  password:"",         //进入mysql密码
  database:"xuezi",
  port:3306
});

//3:创建sql
//var sql = "INSERT INTO xz_laptop_family ";
//sql += " VALUES(null,'"+fname+"')";
//升级sql
var sql = "INSERT INTO xz_laptop_family ";
sql += " VALUES(null,?)";

var fname = "大蜜蜂手机";
//4:发送sql并且获取返回结果
//function回调函数，当sql执行完毕
conn.query(sql,[fname],function(err,result){
  if(err)throw err;
  if(result.affectedRows>0){
    console.log("添加成功");
  }
  //5:关闭连接
  conn.end();
})







