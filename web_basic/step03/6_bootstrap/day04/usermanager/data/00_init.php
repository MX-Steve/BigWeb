<?php
	header("content-type:application/json;charset=utf-8");
	$conn = mysqli_connect('127.0.0.1','root','','nj1708acl01',3306);
	mysqli_query($conn,"SET NAME UTF-8");