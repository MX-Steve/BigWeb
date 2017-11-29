<?php
header("Content-Type:application/json");
sleep(4);
echo json_encode(["ok"=>1,"msg"=>"返回响应!"]);