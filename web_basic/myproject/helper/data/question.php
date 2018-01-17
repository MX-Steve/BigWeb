<?php
	require_once("init.php");
	@$cid = $_REQUEST['cid'];
	$sql = "SELECT * FROM questions WHERE  cid = $cid ";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,1);
	echo json_encode($rows);
?>