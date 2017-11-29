<?php
//1:加载init.php文件
require("00_init.php");
//2:获取参数lid
$lid = $_REQUEST["lid"];
//3:创建查询SQL获取该商品所有列值
$sql = "SELECT * FROM xz_laptop";
$sql .= " WHERE lid=$lid";
//4:发送sql语句
$result = mysqli_query($conn,$sql);
//5:抓取一行关联数组
$row = mysqli_fetch_assoc($result);
//6:转换json发送
echo json_encode($row);
