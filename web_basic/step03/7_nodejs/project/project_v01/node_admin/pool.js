/**
 * 连接池模块--因为node中模块都是特殊处理(单例)，多次require不会出错（创建多个对象）
 */
const mysql = require("mysql");
let pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'xuezi',
    port:3306,
    connectionLimit:25
});

module.exports = pool;