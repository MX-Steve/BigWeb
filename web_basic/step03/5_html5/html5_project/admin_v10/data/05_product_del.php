<?php
//1:加载init文件  9:31--9:35
require("00_init.php");
//2:获取指定参定 lid 商品编号
$lid = $_REQUEST["lid"];
//3:创建SQL语句并且执行sql语句
$sql = " UPDATE xz_laptop SET expire='1'";
$sql .= " WHERE lid = $lid";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
//6:如果update/delete/insert 获取影响行数
$rows = mysqli_affected_rows($conn);
//4:获取返回结果并且判断
//5:将结果转json字符串发送
if($rows>0){
 echo '{"code":1,"msg":"删除成功"}';
}else{
 echo '{"code":-1,"msg":"删除失败"}';
}

