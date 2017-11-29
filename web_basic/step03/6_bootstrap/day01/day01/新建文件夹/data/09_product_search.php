<?php
//sleep(1);//模拟网络繁忙 3 秒后发送数据
//1:加载init.php    9:25--9:35
require("00_init.php");
//2:获取参数
//3:$low $high  $name $pno(页码) $pageSize
@$name = $_REQUEST["name"]; //搜索商品名称
@$high = $_REQUEST["high"]; //价格上限
@$low =  $_REQUEST["low"];  //价格下限
@$pno =  $_REQUEST["pno"];  //页码
@$pageSize = $_REQUEST["pageSize"]; //页大小
//4:判断$pno = 1;
//  判断$low = 0;
//  判断$heigh = 2100000000
if(!$name){
  $name = "";         //如果商品名称不存在,""
}
if(!$low){
  $low = 0;           //如果商品价格下限
}
if(!$high){
  $high = 210000000;  //如果商品价格上限
}
if(!$pno){
  $pno = 1;           //如果页码 1
}
if(!$pageSize){
  $pageSize = 8;      //如果页大小 8
}
//5:创建SQL  总页数
$sql =  " SELECT count(*) as c FROM xz_laptop";
$sql .= " WHERE lname LIKE '%$name%'";
$sql .= " AND  price >= $low";
$sql .= " AND  price <= $high";
//6:发送sql语句
$result = mysqli_query($conn,$sql);  //9:52--9:55
$row = mysqli_fetch_assoc($result);
$recordCount = intval($row['c']);
//7:创建SQL  当前页内容

$offset = ($pno-1)*$pageSize;
$sql  = "";
$sql .= " SELECT l.lid,l.lname,l.title,l.price,p.sm pic,f.fname,l.spec,l.expire";
$sql .= " FROM xz_laptop l,xz_laptop_pic p,xz_laptop_family f";
$sql .= " WHERE ";
$sql .= " l.lid=p.laptop_id";
$sql .= " AND";
$sql .= " l.family_id=f.fid";
$sql .= " AND";
$sql .= " l.lname LIKE '%$name%'";
$sql .= " AND";
$sql .= " l.price <= $high";
$sql .= " AND";
$sql .= " l.price >= $low";
$sql .= " GROUP BY l.lid";
$sql .= " LIMIT $offset,$pageSize";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
$pageCount = ceil($recordCount/$pageSize);
$output = [
  "pno"=>$pno,
  "pageSize"=>$pageSize,
  "low"=>$low,
  "high"=>$high,
  "pageCount"=>$pageCount,
  "data"=>$rows,
  "name"=>$name
];
echo json_encode($output);



//8:拼接数组返回json字符串
