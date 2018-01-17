<?php
	require_once("init.php");
	@$cid = $_REQUEST['cid'] or die('{"code":-1,"msg":"课程编号不能为空"}');
	$sql = " SELECT * FROM levels WHERE cid = $cid ";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,1);
	echo json_encode($rows);
?>