<?php
	require("00_init.php");
	header("content-type:application/json;charset=utf-8");
	@$pno = $_REQUEST['pno'];
	$psize = 9;
	if(!$pno){
		$pno = 0;
	}
	$output = [
		//counts,pno,pages,psize,data
	];
	$sql = "SELECT count(*) FROM xz_laptop";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_row($result);
	$output['counts']=$row[0];
	$output['pno'] = $pno;
	$output['psize']=$psize;
	$output['pages']=ceil($output['counts']/$output['psize']);
	$sql="SELECT xz_laptop.lid,xz_laptop.title,xz_laptop.price,xz_laptop_pic.md FROM xz_laptop , xz_laptop_pic WHERE xz_laptop.lid = xz_laptop_pic.lid limit $pno,$psize";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,1);
	$output['data']=$rows;
	echo json_encode($output);
?>