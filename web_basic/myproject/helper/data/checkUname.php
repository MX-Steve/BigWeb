<?php
	require_once("init.php");
	@$uname = $_REQUEST['uname'] or die('{"code":-1,"msg":"用户名不能为空"}');
	$sql = "SELECT * FROM user WHERE uname = '$uname'";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_row($result);
	if($row>0){
		echo '{"code":-1,"msg":"用户名已存在"}';
	}else{
		echo '{"code":1,"msg":"可以注册"}';
	}
?>