<?php
//模块五:更新前准备，查询指定商品信息
//0:加载init.php
require("00_init.php");
//1:获取参数lid   9:22-9:27
$lid = $_REQUEST["lid"];
//2:创建sql,发送sql
$sql =  " SELECT lid,price,lname FROM ";
$sql .= " xz_laptop WHERE lid=$lid";
//3:获取返回结果
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
//4:抓取一行关联数组
//5:输出json
echo json_encode($row);