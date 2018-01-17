<?php
	require_once("init.php");
//	@$cid = $_REQUEST['cid'] or die('{"code":-1,"msg":"课程编号不能为空"}');
//	@$lid = $_REQUEST['lid'] or die('{"code":-2,"msg":"等级编号不能为空"}');
	$sql = " SELECT * FROM cources WHERE invalid = '0'";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,1);
	echo json_encode($rows);
?>