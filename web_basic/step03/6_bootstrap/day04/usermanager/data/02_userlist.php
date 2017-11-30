<?php
session_start();
require_once("00_init.php");
$sql = "SELECT * FROM t_user";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
    echo mysqli_error($conn);
}
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
$output = [
    "utype"=>$_SESSION['utype'],
    "data"=>$rows
];
echo json_encode($output);