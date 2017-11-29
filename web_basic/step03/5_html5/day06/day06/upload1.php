<?php
//所有上传文件信息都保存在数组
//var_dump($_FILES);
header("content-type:application/json;charset=utf-8");
//1.获得上传文件的名称
$picname = $_FILES['myfile']['name'];
//2.获得上传文件的大小
$picsize = ceil($_FILES['myfile']['size']/1000);
//3.最大512k
if($picsize>512){
	echo '{"code":-1,"msg":"上传文件过大，不能超过512k"}';
	exit;
}
$type = strstr($picname,'.');
//4.获取文件的后缀：.jpg .png .gif
//5.如果文件后缀不是以上范围，程序停止
if($type != '.doc' && $type != '.docx'){
	echo '{"code":-2,"msg":"上传文件必须是word"}';
	exit;
}
//6.创建新文件名
$pics = time().rand(1,9999).$type;
//7.将临时文件移动到新的目录里 upload
//echo $pics;
$old =  $_FILES['myfile']['tmp_name'];//临时文件名
$new = "upload/".$pics;
move_uploaded_file($old,$new);
echo '{"code":1,"msg":"上传文件成功"}';