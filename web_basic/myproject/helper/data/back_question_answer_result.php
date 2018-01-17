<?php
	require_once("init.php");
	$uid = $_REQUEST['uid'];
	$score = $_REQUEST['score'];
	$cid = $_REQUEST['cid'];
	$sql = "SELECT * FROM scores WHERE uid = $uid AND cid = $cid";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	if($row){
		$sql = "UPDATE scores SET score = $score WHERE uid = $uid AND cid = $cid";
		$result = mysqli_query($conn,$sql);
	}else{
		$sql = "INSERT INTO scores VALUES(NULL,$uid,$cid,$score)";
		$result = mysqli_query($conn,$sql);
	}
	if($result){
		echo '{"code":1,"msg":"录入成绩结束"}';
	}else{
		echo '{"code":-1,"msg":"录入成绩失败"}';
	}
?>