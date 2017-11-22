<?php
 session_start();
 require("00_init.php");
 //4:获取参数 uname upwd
 $u = $_REQUEST["uname"];
 $p = $_REQUEST["upwd"];
 $yzm = $_REQUEST["yzm"];//获取用户输入验证码
 //5:验证格式是否正确 preg_match($pattern,$str)
 $uPattern = '/^[a-zA-Z0-9_]{3,12}$/';
 $pPattern = '/^[a-zA-Z0-9_]{3,12}$/';
 //验证:验证码格式的正则表达式
 $yPattern = '/^[a-zA-Z]{4}$/';

 if(!preg_match($uPattern,$u)){
   echo '{"code":-2,"msg":"用户名格式不正确"}';
   exit;//停止php执行
 }
 if(!preg_match($pPattern,$p)){
   echo '{"code":-3,"msg":"密码格式不正确"}';
   exit;
 }
 if(!preg_match($yPattern,$yzm)){
   echo '{"code":-3,"msg":"验证码格式不正确"}';
   exit;
 }
 //验证:用户输入验证码是否正确
 $code = $_SESSION["code"];
 if($code!=$yzm){
   echo '{"code":-3,"msg":"验证码不正确"}';
   exit;
 }
 //6:创建sql并且发送sql
 $sql = " SELECT * FROM xz_admin";
 $sql .=" WHERE uname='$u'";
 $sql .=" AND upwd=md5('$p')";
 $sql .=" AND expire='0'";
 //解决方案一:输出sql
 //echo $sql;
 $result = mysqli_query($conn,$sql);
 //解决方案二:判断sql是否出错
 if(mysqli_error($conn)){
   echo mysqli_error($conn);
 }
 $row = mysqli_fetch_assoc($result);
 //7:判断返回结果是否正确
 //8:输出结果 json
 if($row===null){
   echo '{"code":-1,"msg":"用户名或密码错误"}';
 }else{
   echo '{"code":0,"msg":"登录成功"}';
 }
?>

