<?php
//1:加载init.php    9:35--9:50
require("00_init.php");
///2:获取所有参数
$family_id = $_REQUEST["family_id"];
$title = $_REQUEST["title"];
$subtitle = $_REQUEST["subtitle"];
$price = $_REQUEST["price"];
$promise = $_REQUEST["promise"];
$spec = $_REQUEST["spec"];
$lname = $_REQUEST["lname"];
$os = $_REQUEST["os"];
$memory = $_REQUEST["memory"];
$resolution = $_REQUEST["resolution"];
$video_card = $_REQUEST["video_card"];
$cpu = $_REQUEST["cpu"];
$video_memory = $_REQUEST["video_memory"];
$category = $_REQUEST["category"];
$disk = $_REQUEST["disk"];
$details = $_REQUEST["details"];
//3:创建SQL语句
$sql = " INSERT INTO xz_laptop VALUES(";
$sql .=" null,$family_id,'$title','$subtitle',";
$sql .=" $price,'$promise','$spec',";
$sql .=" '$lname','$os','$memory','$resolution',";
$sql .=" '$video_card','$cpu','$video_memory',";
$sql .=" '$category','$disk','$details',";
$sql .= "  UNIX_TIMESTAMP(),0,0,'0'";
$sql .=" )";
//4:执行sql
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
 echo mysqli_error($conn);
}
$row = mysqli_affected_rows($conn);
//5:并且判断返回结果
if($row>0){
  echo '{"code":1,"msg":"添加成功"}';
}else{
  echo '{"code":-1,"msg":"添加失败"}';
}