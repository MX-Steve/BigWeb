<?php
    require_once("00_init.php");
    $uid=$_REQUEST['uid'];      //用户编号
    $rid=$_REQUEST['rid'];      //角色编号
    //$state=$_REQUEST['state'];  //状态:'1','0'

    //查询指定用户id与角色id是否存在关联关系
    //    $sql = "SELECT * FROM t_user_rolw WHERE uid = $uid AND rid = $rid ";
    //    $result =mysqli_query($conn,$sql);
    //    $row =
    $sql = "INSERT INTO t_user_role VALUES (null,$rid,$uid)";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_affected_rows($conn);
    if($row > 0){
        echo '{"code":1,"msg":"添加成功"}';
    }else{
        echo '{"code":-1,"msg":"添加失败"}';
    }
