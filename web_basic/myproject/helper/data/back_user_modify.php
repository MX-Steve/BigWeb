<?php
	require_once("init.php");
	$uid = $_REQUEST['uid'];
	$upwd = $_REQUEST['upwd'];
	$role = $_REQUEST['role'];
	$sql = "UPDATE user SET upwd='$upwd' , role= '$role' WHERE uid = '$uid'";
	$result = mysqli_query($conn,$sql);
	
	if(mysqli_affected_rows($conn)==1){
		echo '{"code":1,"msg":"用户信息修改成功"}';
	}else{
		echo '{"code":-1,"msg":"用户信息修改失败"}';
	}
?>