<?php
require_once("../data/init.php");
@$uname=$_REQUEST["uname"];
@$upwd1=$_REQUEST["upwd1"];
@$email=$_REQUEST["email"];
$sql="insert into xz_user(uname,upwd,email) values('$uname','$upwd1','$email')";
mysqli_query($conn,$sql);