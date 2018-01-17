<?php
	require_once("init.php");
	$cid = $_REQUEST['cid'];
	$sql = "UPDATE cources SET invalid = '1' WHERE cid = $cid";
	$result = mysqli_query($conn,$sql);
	if($result){
		echo '{"code":1,"msg":"课程删除成功!"}';
	}else{
		echo '{"code":-1,"msg":"课程删除失败!"}';
	}
?>