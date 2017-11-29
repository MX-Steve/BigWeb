<?php
$pid="130102198312262151";
    //012345678901234567
$birth=substr($pid,6,8);
echo $birth;
$gender=substr($pid,-2,1)%2==1?"男":"女";
echo $gender;