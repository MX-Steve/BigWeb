<?php
	require_once("init.php");
	@$cid = $_REQUEST['cid'];
	@$lid = $_REQUEST['lid'];
	@$pname = $_REQUEST['pname'] or die('{"code":-1,"msg":"题目内容不能为空"}');
	@$key = $_REQUEST['key'] or die('{"code":-2,"msg":"关键词不能为空"}');
	@$ptime = $_REQUEST['ptime'] or die('{"code":-3,"msg":"做题不能为空"}');
	@$answer = $_REQUEST['answer'];
	$sql = " INSERT INTO questions VALUES(NULL,$cid,$lid,'$pname','$ptime','$answer','$key')";
	$result = mysqli_query($conn,$sql);
	if($result){
		echo '{"code":1,"msg":"题目添加成功！"}';
	}else{
		echo '{"code":-4,"msg":"题目添加失败！"}';
	}
?>