<?php
	//功能模块1：用户登录
//	1.获取用户参数uname/upwd
//	2.修改响应头格式json
//	3.链接数据库
//	4.设置编码
//	5.创建sql，并且发送sql语句
//	6.获取返回结果并判断，
//	如果成功，开启session，并且把uid/type保存
//	7.输出解决 '{"code":1,"msg":"登录成功"}';
	require_once('00_init.php');	
	@$uname = $_REQUEST['uname'];
	@$upwd = $_REQUEST['upwd'];
	$sql = "SELECT * FROM t_user WHERE uname= '$uname' AND upwd = md5('$upwd')";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
	
	if($row == null){
		echo '{"code":-1,"msg":"登录失败"}';
	}else{
		session_start();
//		var_dump($row);
		$_SESSION['uid'] = $row[0]['id'];
		$_SESSION['utype'] = $row[0]['utype'];
		echo '{"code":1,"msg":"登录成功"}';
	}
//	var_dump($_SESSION);
?>