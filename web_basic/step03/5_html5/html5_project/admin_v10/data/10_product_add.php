<?php
//1:加载init.php
require_once('00_init.php');
//2:获取所有参数
$family_id = $_REQUEST['family_id'];
//$product_id = $_REQUEST['product_id'];
$title = $_REQUEST['title'];
$subtitle = $_REQUEST['subtitle'];
$price = $_REQUEST['price'];
$promise = $_REQUEST['promise'];
$spec = $_REQUEST['spec'];
$lname = $_REQUEST['lname'];
$os = $_REQUEST['os'];
$memory = $_REQUEST['memory'];
$resolution = $_REQUEST['resolution'];
$video_card = $_REQUEST['video_card'];
$cpu = $_REQUEST['cpu'];
$video_memory = $_REQUEST['video_memory'];
$category = $_REQUEST['category'];
$disk = $_REQUEST['disk'];
$details = $_REQUEST['details'];
//$shelf_time = $_REQUEST['shelf_time'];
//$sold_count = $_REQUEST['sold_count'];
//$is_onsale = $_REQUEST['is_onsale'];
//$is_onsale = $_REQUEST['is_onsale'];

//3:创建SQL语句 UNIX_TIMESTAMP():返回毫秒数
$sql = "INSERT INTO xz_laptop VALUES(null,$family_id,'$title','$subtitle',$price,'$promise','$spec','$lname','$os','$memory','$resolution','$video_card','$cpu','$video_memory','$category','$disk','$details',UNIX_TIMESTAMP(),0,0,'0')";

//4:执行sql
$result = mysqli_query($conn,$sql);
$row = mysqli_affected_rows($conn);
//5:并且判断返回结果
if($row>0){
    echo '{"code":1,"msg":"添加成功"}';
}else{
    echo '{"code":-1,"msg":"添加失败"}';;
}
