<?php
//11:45--11:50
require("00_init.php");
//1:获取参数uid
$uid = $_REQUEST["uid"];
//2:查询指定用户所拥有角色列表 rid,rname
$sql =  " SELECT r.rid,r.rname";
$sql .= " FROM t_role r,t_user_role u";
$sql .= " WHERE r.rid=u.rid";
$sql .= " AND u.uid=$uid";

$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);
?>
