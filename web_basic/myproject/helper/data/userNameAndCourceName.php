<?php
	require_once("init.php");
	@$uid = $_REQUEST['uid'] or die('{"code":-1,"msg":"用户编号不能为空"}');
	$sql = "SELECT uname FROM user WHERE uid = '$uid'";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	$uname = $row['uname'];
	if(COUNT($row)>0){
		$sql = "SELECT cname,cid FROM cources WHERE cid = (SELECT cid FROM scores WHERE uid = '$uid')";
		$result = mysqli_query($conn,$sql);
		$row = mysqli_fetch_assoc($result);
		$cname = $row['cname'];
		$cid = $row['cid'];
		$output = [
			"code"=>1,
			"uid"=>$uid,
			"uname"=>$uname,
			"cname"=>$cname,
			"cid"=>$cid
		];
		echo json_encode($output);
	}else{
		echo '{"code":-2,"msg":"没有该用户信息"}';
	}
?>