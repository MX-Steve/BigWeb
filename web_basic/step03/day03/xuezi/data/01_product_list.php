<?php
	require("00_init.php");
	header("content-type:application/json;charset=utf-8");
	@$pno = $_REQUEST['pno'];
	$psize = 8;
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
	$sql="SELECT xz_laptop.lid,xz_laptop.title,xz_laptop.price,xz_laptop.category FROM xz_laptop limit $pno,$psize";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,1);
	if(mysqli_error($conn)){
		echo mysqli_error($conn);
	}
	$output['data']=$rows;
	echo json_encode($output);
?>