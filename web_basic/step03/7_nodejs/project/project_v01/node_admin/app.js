//1：加载对应模块 7
//(1)http底层模块:作用完成http协议(客户端和服务器功能)
const http = require("http");
//(2)express 封装http模块轻量级web服务器
const express = require("express");
//(3)mysql 模块:连接和管理mysql数据库
// const mysql = require("mysql");
//(4,5)session和cookie 模块:express默认不支持 session;cookie
//项目中sessioin和cookie必须
const cookieParser = require("cookie-parser");
const session  = require("express-session");
//(6)处理post请求数据模块 req.body
const bodyParser = require("body-parser");
//(7)处理cors 跨域
const cors = require("cors");
const pool = require("./pool");
//加载路由模块
const routerProduct = require("./router/product");
const routerUser = require("./router/user");
const routerOrder = require("./router/order");





//2: 对模块配置 cookie session core
let app = express();
let server = http.createServer(app);
server.listen(3000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
  resave:false,
  saveUninitialized:true,
  secret:"07teducn"
}));
app.use(cors({
  origin:["http://127.0.0.1:8080"],
  credentials:true
}));

//使用路由模块
app.use("/product",routerProduct);
app.use("/user",routerUser);
app.use("/order",routerOrder);

//3: 创建mysql连接池
// var pool = mysql.createPool({
//   host:"127.0.0.1",
//   user:"root",
//   password:"",
//   database:"xuezi",
//   port:3306,
//   connectionLimit:25
// });
//4: 创建express对象
//5: 绑定监听端口
// //6: 接收请求
// //7: get /product_list  分页
// //{pno:1,pageSize:8,pageCount:6,data:[]}
// app.get("/product_list",(req,res)=>{
//      //获取客户想显示页号
//      let pno = req.query.pno;
//      if(!pno){
//        pno = 1;
//      }
//      pno = parseInt(pno);
//      //创建一个对象，保存所有用户需要数值
//      let output= {
//        pageSize:8,     //页面大小
//        pageCount:0,    //总记录数
//        pno:pno,        //当前页码
//        data:[]         //当前记录
//      };
//      let process = 0;
//      //查询总记录数
//      pool.getConnection((err,conn)=>{
//        if(err)throw err;
//        var sql = "SELECT count(*) AS c FROM xz_laptop";
//        conn.query(sql,(err,result)=>{
//           if(err)throw err;
//           //总记录数
//           var count = result[0]["c"];
//           //总页数
//           output.pageCount =
//             Math.ceil(count/output.pageSize);
//           //释放连接
//           conn.release();
//           //判断当前执行顺序,
//           process+=50;
//           if(process==100){
//             res.json(output);
//           }
//        });
//      });
//      //查询指定页号的内容
//      pool.getConnection((err,conn)=>{
//        if(err)throw err;
//        var sql = " SELECT lid,title,price FROM xz_laptop";
//        sql += " LIMIT ?,?";
//        var offset = (output.pno-1)*output.pageSize;
//        conn.query(sql,[offset,output.pageSize],(err,result)=>{
//          output.data = result;
//          conn.release();
//          process+=50;
//          if(process==100){
//            res.json(output);
//          }
//        });
//      })
// });
// //2:模块删除 get   17:40-17:45
// app.get("/product_del",(req,res)=>{
//   //(1) 获取商品id
//   var lid = req.query.lid;
//   //(2) 创建sql UPDATE expire='1'
//   pool.getConnection((err,conn)=>{
//     if(err)throw err;
//     var sql = "UPDATE xz_laptop SET expire='1'";
//     sql += " WHERE lid=?";
//     conn.query(sql,[lid],(err,result)=>{
//       if(err)throw err;
//       if(result.affectedRows>0){
//         res.json({code:1,msg:"删除成功"});
//       }else{
//         res.json({code:-1,msg:"删除失败"});
//       }
//       conn.release();
//     });
//   });
// });
//
// //3:商品更新
// app.get('/product_update',(req,res)=>{
//
//     //(1) 获取商品id 新的价格
//     var lid = req.query.lid;
//     var price  = req.query.price;
//     //(2) 创建sql UPDATE
//     pool.getConnection((err,conn)=>{
//         if(err) throw err;
//         var sql = "UPDATE xz_laptop SET price = ? ";
//         sql += " WHERE lid = ?";
//         conn.query(sql,[price,lid],(err,result)=>{
//             if(err) throw err;
//             //(3) 获取返回结果
//             //(4) 判断并且输出
//             //{code:1,msg:"更新成功"}
//             //{code:-1,msg:"更新失败"}
//             if(result.affectedRows > 0){
//                 res.json({code:1,msg:"更新成功"});
//             }else{
//                 res.json({code:-1,msg:"更新失败"});
//             }
//         });
//     })
//
//
// });
// //4:商品搜索
// //(1) 上限、下限、名称，pno,pagesize
// //(2) 创建sql UPDATE
// //(3) 获取返回结果
// //(4) 判断并且输出
// //{code:1,msg:"更新成功"}
// //{code:-1,msg:"更新失败"}
// app.get('/product_search',(req,res)=>{
//     var pno = req.query.pno;
//     var pagesize = req.query.pageSize;
//     var high = req.query.high;
//     var low = req.query.low;
//     var lname = req.query.lname;
//     if(!pno) pno=1;
//     if(!pagesize) pagesize=8;
//     if(!high) high=99999;
//     if(!low) low=0;
//     if(!lname) lname='';
//
//     var output = {
//         totalRecord:0,
//         pageSize:8,
//         pageCount:0,
//         pno:pno,
//         data:[]
//     };
//     var progress = 0;
//
//     pool.getConnection((err,conn)=>{
//         if(err) throw err;
//         var sql = "SELECT count(*) as c FROM xz_laptop";
//         sql += " WHERE lname LIKE ?";
//         sql += " AND price >= ?";
//         sql += " AND price <= ?";
//         conn.query(sql,[`%${lname}%`,low,high],function (err,result) {
//             if(err) throw err;
//             output.totalRecord = result[0].c;
//             output.pageCount = Math.ceil(result[0].c/output.pageSize);
//             progress += 50;
//             if(progress == 100) res.json(output);
//             conn.release();
//         });
//     });
//     //当前页的内容 var output = []
//     pool.getConnection((err,conn)=>{
//         if(err) throw err;
//         var sql  = "";
//         sql += " SELECT l.lid,l.lname,l.title,l.price,p.sm pic,f.fname,l.spec,l.expire";
//         sql += " FROM xz_laptop l,xz_laptop_pic p,xz_laptop_family f";
//         sql += " WHERE ";
//         sql += " l.lid=p.laptop_id";
//         sql += " AND";
//         sql += " l.family_id=f.fid";
//         sql += " AND";
//         sql += " l.lname LIKE ?";
//         sql += " AND";
//         sql += " l.price <= ?";
//         sql += " AND";
//         sql += " l.price >= ?";
//         sql += " GROUP BY l.lid";
//         sql += " LIMIT ? , ?";
//         var offset = (output.pno-1)*output.pageSize;
//         conn.query(sql,[`%${lname}%`,low,high,offset,output.pageSize],(err,result)=>{
//             if(err) throw err;
//             console.log(result);
//             progress +=50;
//             output.data = result;
//             if(progress == 100){
//                 res.json(output);
//             }
//             conn.release();
//         });
//     })
//
// });



//5:用户分页




