<?php
 require("00_init.php");
 //4:获取参数 uname upwd
 $u = $_REQUEST["uname"];
 $p = $_REQUEST["upwd"];
 //5:验证格式是否正确 preg_match($pattern,$str)
 //6:创建sql并且发送sql
 $sql = " SELECT * FROM xz_admin";
 $sql .=" WHERE uname='$u'";
 $sql .=" AND upwd=md5($p)";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
 //7:判断返回结果是否正确
 //8:输出结果 json
 if($row===null){
   echo '{"code":-1,"msg":"用户名或密码错误"}';
 }else{
   echo '{"code":0,"msg":"登录成功"}';
 }
?>