<?php
	require_once("init.php");
	@$uname = $_REQUEST['uname'] or die('{"code":-1,"msg":"用户名不能为空"}');
	@$upwd = $_REQUEST['upwd'] or die('{"code":-2,"msg":"密码不能为空"}');
	$sql = "SELECT * FROM user WHERE uname = '$uname' AND upwd = '$upwd'";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	$uid = $row['uid'];
	$uname = $row['uname'];
	$role = $row['role'];
	if($row>0){
		$output = [
			"code"=>1,
			"uid"=>$uid,
			"uname"=>$uname,
			"role"=>$role,
			"msg"=>"登录成功"
		];
		echo json_encode($output);
	}else{
		echo '{"code":-1,"msg":"用户名或密码错误"}';
	}
?>