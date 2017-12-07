const mysql = require('mysql');

let conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'web1708acl02',
    port:3306
});
let uname = 'lihan1';
let upwd = '123456';
let sql = "INSERT INTO t_user VALUES(null,?,md5(?))";

conn.query(sql,[uname,upwd],function (err,result) {
    if(err) throw err;
    if(result.affectedRows > 0){
        console.log("插入成功!");
    }

});

let upwd1='123456';
let uid = 3;

let sql1 = "UPDATE t_user SET upwd=md5(?) WHERE uid = ?";

conn.query(sql1,[upwd1,uid],function (err,result) {
    if(err) throw err;
    if(result.affectedRows >0){
        console.log('更新成功');
    }
    conn.end();
});