//跟产品相关的内容放在此处
//6: 接收请求
//7: get /product_list  分页
var pool = require("../pool");
const express = require("express");
var router = express.Router();
//{pno:1,pageSize:8,pageCount:6,data:[]}
router.get("/list",(req,res)=>{
    res.send("product/list ...");

});
//2:模块删除 get   17:40-17:45
// router.get("/del",(req,res)=>{
//     //(1) 获取商品id
//     var lid = req.query.lid;
//     //(2) 创建sql UPDATE expire='1'
//     pool.getConnection((err,conn)=>{
//         if(err)throw err;
//         var sql = "UPDATE xz_laptop SET expire='1'";
//         sql += " WHERE lid=?";
//         conn.query(sql,[lid],(err,result)=>{
//             if(err)throw err;
//             if(result.affectedRows>0){
//                 res.json({code:1,msg:"删除成功"});
//             }else{
//                 res.json({code:-1,msg:"删除失败"});
//             }
//             conn.release();
//         });
//     });
// });
//
// //3:商品更新
// router.get('/update',(req,res)=>{
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
// router.get('/search',(req,res)=>{
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

module.exports = router;