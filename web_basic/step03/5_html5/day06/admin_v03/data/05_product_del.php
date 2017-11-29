<?php
/*
    1.加载init文件
    2.获取商品编号lid
    3.创建并执行sql
    4.获取返回结果并判断
    5.  将结果转化为json字符串发送
*/
    header("content-type:application/json;charset=utf-8");
    require_once('00_init.php');
    @$lid = $_REQUEST['lid'];
    $sql = "UPDATE xz_laptop SET expire = '1' WHERE lid=$lid";
    $result= mysqli_query($conn,$sql);
    if(mysqli_error($conn)){
        echo mysqli_error($conn);
    }
    $rows = mysqli_affected_rows($conn);
    if($rows>0){
        echo '{"code":1,"msg":"更新成功!"}';
    }else{
        echo '{"code":-1,"msg":"更新失败!"}';
    }
?>