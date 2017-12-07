//1.引入mysql模块
const mysql = require('mysql');
//3.创建连接
let conn = mysql.createConnection({
    host:'127.0.0.1',   //主机地址
    user:'root',        //进入mysql系统用户名
    password:'',        //进入mysql密码
    database:'xuezi',   //数据库
    port:3306           //端口号
});

let sql = " select * from xz_laptop_family";
sql += " WHERE fid = ? ";
conn.query(sql,[100],function (err,result) {
    if(err) throw err;
    console.log(result);
    conn.end();
});















