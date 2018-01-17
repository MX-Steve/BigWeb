<?php
	require_once("init.php");
	$uid = $_REQUEST['uid'];
	$sql = "UPDATE user SET invalid = '1' WHERE uid = $uid";
	$result = mysqli_query($conn,$sql);
	if($result){
		echo '{"code":1,"msg":"用户删除成功!"}';
	}else{
		echo '{"code":-1,"msg":"用户删除失败!"}';
	}
?>