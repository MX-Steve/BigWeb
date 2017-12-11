<?php
require("00_init.php");
$uid = $_REQUEST["uid"];
$rid = $_REQUEST["rid"];
$sql = "INSERT INTO t_user_role VALUES(null,$rid,$uid)";
$result = mysqli_query($conn,$sql);
$row = mysqli_affected_rows($conn);
if($row>0){
  echo '{"code":1,"msg":"添加成功"}';
}else{
  echo '{"code":-1,"msg":"添加失败"}';
}
