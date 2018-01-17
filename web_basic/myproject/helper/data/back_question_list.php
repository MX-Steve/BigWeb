<?php
	require_once("init.php");
	@$cid = $_REQUEST['cid'];
	@$lid = $_REQUEST['lid'];
	$sql = "SELECT * FROM questions WHERE cid = $cid AND lid = $lid";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,1);
	echo json_encode($rows);
?>