<?php
	require_once("init.php");
	$sql =" SELECT * FROM cources WHERE invalid = '0'";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,1);
	$users = [];
	for($i=0;$i<COUNT($rows);$i++){
		$uid = $rows[$i]['uid'];
		$sql = " SELECT uname FROM user WHERE uid = '$uid'";
		$result = mysqli_query($conn,$sql);
		$row = mysqli_fetch_assoc($result);
		$users[] = $row;
	}
	$output = [
		"data"=>$rows,
		"users"=>$users
	];
	echo json_encode($output);
?>