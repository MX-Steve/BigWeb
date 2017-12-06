<?php
require_once("00_init.php");
$sql = "SELECT * FROM t_user";
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);