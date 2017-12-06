<?php
//1.获取uid
//2.查询指定用户所拥有的角色列表 rid,rname
//3.t_role  t_user_role
require_once("00_init.php");
@$uid = $_REQUEST['uid'];

/*$sql = " SELECT rid,rname FROM t_role WHERE rid in (SELECT rid FROM t_user_role WHERE uid = $uid)";
*/
$sql = ' SELECT r.rid,r.rname';
$sql .= ' FROM t_role r,t_user_role u';
$sql .= ' WHERE r.rid = u.rid';
$sql .= " AND u.uid = $uid";

$result = mysqli_query($conn,$sql);
//var_dump($sql);
$rows = mysqli_fetch_all($result,1);
echo json_encode($rows);