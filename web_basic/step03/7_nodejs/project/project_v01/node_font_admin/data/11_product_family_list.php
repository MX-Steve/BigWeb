<?php
//1:加载init.php
require("00_init.php");
//2:创建sql语句并且发送SQL xz_laptop_family
$sql = "SELECT * FROM xz_laptop_family";
$result = mysqli_query($conn,$sql);
//3:抓取多行记录
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//4:转换json 输出
echo json_encode($rows);