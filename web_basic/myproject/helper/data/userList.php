<?php
	require_once("init.php");
	$sql = "SELECT * FROM user WHERE invalid != '1'";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,1);
	echo json_encode($rows);
?>