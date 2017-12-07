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
//let fname = "';drop table mysql.user";
//let uname = "' OR 1=1";
//let uname = "';select into c:/aa.dat";
//let upwd = '123';
//let sql = ` SELECT * FROM xz_user WHERE uname='${uname}' & upwd= '${upwd} '`;
//3.编写sql
// let sql = "INSERT INTO xz_laptop_family VALUES (NULL,'小辣椒手机')";
let sql = "INSERT INTO xz_laptop_family VALUES (NULL,?)";
//4.发送sql，并返回结果
/**
 * function:回调函数，sql执行完，执行
 */
let fname = "小蜜蜂手机";
conn.query(sql,[fname],function (err,result) {
    if(err) throw err;
    //console.log(result);
    if(result.affectedRows>0){
        console.log('添加成功!');
    }
    //5.关闭连接
    conn.end();
});
