<?php
	require_once("init.php");
	@$cid = $_REQUEST['cid'] or die('{"code":-1,"msg":"课程编号不能为空"}');
	$sql = "SELECT scores.uid,scores.score,user.uname,scores.score as level FROM scores,user WHERE user.uid = scores.uid AND cid = $cid ORDER BY scores.score DESC";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,1);
	$output = [
		"data"=>$rows
	];
	echo json_encode($output);
?>