<?php
	header("content-type:application/json;charset=utf-8");
	$output = [];
	$output[]=["label"=>"部门1","value"=>150];
	$output[]=["label"=>"部门2","value"=>190];
	$output[]=["label"=>"部门3","value"=>180];
	$output[]=["label"=>"部门4","value"=>180];
	echo json_encode($output);
?>