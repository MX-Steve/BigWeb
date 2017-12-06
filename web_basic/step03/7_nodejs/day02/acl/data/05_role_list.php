<?php
    require_once('00_init.php');
    $uid=$_REQUEST['uid'];
    $sql = " SELECT r.rid,r.rname ";
    $sql .=" FROM t_role r ";
    $sql .=" WHERE r.rid NOT IN";
    $sql .=" (SELECT rid FROM t_user_role WHERE uid=$uid ) ";
    $result = mysqli_query($conn,$sql);
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($rows);
?>