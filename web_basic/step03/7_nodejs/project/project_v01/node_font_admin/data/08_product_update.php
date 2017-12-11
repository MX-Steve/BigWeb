<?php
//1:加载 init.php   9:35--9:40
require("00_init.php");
//2:获取二个参数 lid price
$lid = $_REQUEST["lid"];
$price = $_REQUEST["price"];
//3:创建sql   UPDATE
$sql  = " UPDATE xz_laptop SET price=$price";
$sql .= " WHERE lid=$lid";
//4:执行sql并且判断
$result = mysqli_query($conn,$sql);
$row = mysqli_affected_rows($conn);
//5:结果发送 json '{"code":1,"msg":"更新成功"}'
if($row>0){
 echo '{"code":1,"msg":"更新成功"}';
}else{
 echo '{"code":-1,"msg":"更新失败"}';
}
?>