<?php
    require_once('00_init.php');
    @$lid = $_REQUEST['lid'];
    if(!$lid){
        return ;
    }
    $sql = "SELECT * FROM xz_laptop WHERE lid = $lid";
    $result = mysqli_query($conn,$sql);
    if($result){
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row);
    }
?>