<?php
	require_once("init.php");
	@$uname = $_REQUEST['uname'] or die('{"code":-1,"msg":"用户名不能为空"}');
	@$upwd = $_REQUEST['upwd'] or die('{"code":-2,"msg":"密码不能为空"}');
	@$reg_time = $_REQUEST['reg_time'];
	@$log_time = $_REQUEST['reg_time'];
	@$role = $_REQUEST['role'];
	/*role:
		0:普通用户
		1:普通管理员
		2:超级管理员
	*/
	if(!$role){
		$role = 0;
	}
	$sql = "INSERT INTO user VALUES(NULL,'$uname','$upwd','$reg_time','$log_time','$role','0')";
	$result = mysqli_query($conn,$sql);
	$uid = mysqli_insert_id($conn);
	$output = [
		"code"=>1,
		"msg"=>"成功",
		"uid"=>$uid
	];
	if($result){
		echo json_encode($output);
	}else{
		echo '{"code":-3,"msg":"失败"}';
	}
?>