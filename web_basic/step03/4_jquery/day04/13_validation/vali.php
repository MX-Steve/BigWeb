<?php
header("Content-Type:text/plain");
require_once("../data/init.php");
@$uname=$_REQUEST["uname"];
$sql="select count(*) from xz_user where ";
if($uname){
	$sql.=" uname='$uname'";
	$result=mysqli_query($conn,$sql);
	$count=mysqli_fetch_row($result)[0];
	if($count==1) echo "false";
  else echo "true";
}else{
	@$email=$_REQUEST["email"];
	if($email){
		$sql.=" email='$email'";
		$result=mysqli_query($conn,$sql);
		$count=mysqli_fetch_row($result)[0];
		if($count==1) echo "false";
		else echo "true";
	}
}