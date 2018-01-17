<?php
	require("init.php");
	$cid = $_REQUEST['cource'] or die('{"code":-1,"msg":"课程编号不能为空"}');
	$level = $_REQUEST['level'] or die('{"code":-2,"msg":"课程等级不能为空"}');
	$sql = "SELECT cname FROM cources WHERE cid=$cid ";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	$cname = $row['cname'];
	
	$sql = "SELECT lid FROM levels WHERE cid=$cid";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
	$count = COUNT($row);

	$sql = "SELECT lname FROM levels WHERE lid=$level AND cid=$cid";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	$lname = $row['lname'];

	$sql = "SELECT pid FROM questions WHERE cid = $cid";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
	$question_count = COUNT($row);
	$output = [
		"cid"=>$cid,
		"level"=>$level,
		"cname"=>$cname,
		"lname"=>$lname,
		"count"=>$count,
		"question_count"=>$question_count
	];
	echo json_encode($output);
?>