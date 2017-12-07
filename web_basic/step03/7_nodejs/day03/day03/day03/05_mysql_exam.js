//web1708acl02
//1:加载mysql模块
const mysql = require("mysql");
//2:创建连接对象
var conn = mysql.createConnection({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"web1708acl02",
  port:3306
});
//3:创建一条sql语句
//4:发送sql语句并且判断
var sql = "INSERT INTO t_user VALUES(null,?,md5(?))";
conn.query(sql,["james","123abc"],function(err,result){
    console.log(1);
    if(err)throw err;
    if(result.affectedRows>0){
      console.log("添加成功");
    }
    //conn.end();
});
//5:创建一条sql语句
var sql = "UPDATE t_user SET upwd=md5(?)";
sql += " WHERE uid = ?";
conn.query(sql,["123456",3],function(err,result){
    console.log(2);
    if(err)throw err;
    if(result.affectedRows>0){
      console.log("更新成功");
    }
    conn.end();
});
//6:发送sql语句并且判断