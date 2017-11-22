<?php
    header('content-type:application/json;charset=utf-8');
    $dept = [];
    $dept[]=['label'=>'市场部','price'=>300];
    $dept[]=['label'=>'销售部','price'=>350];
    $dept[]=['label'=>'财务部','price'=>450];
    $dept[]=['label'=>'行政部','price'=>200];
    echo json_encode($dept);
?>