//1:加载mysql模块 查询
const mysql = require("mysql");

var conn = mysql.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"xuezi",
  port:3306
});
var sql = " SELECT * FROM xz_laptop_family";
sql +=" WHERE fid = ?";

conn.query(sql,[1],function(err,result){
  if(err)throw err;
  console.log(result);
  //没有记录->数组[].length==0
  //一行记录->数组[{}]
  //多行记录->数组[{},{}]
  conn.end();
});

