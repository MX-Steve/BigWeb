<?php
	require_once("init.php");
	$uid = $_REQUEST['uid'];
	$sql = "SELECT * FROM user WHERE uid = $uid";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	echo json_encode($row);
?>