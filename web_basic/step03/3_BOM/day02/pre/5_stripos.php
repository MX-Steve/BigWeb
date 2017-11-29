<?php
$url="http://tedu.cn/imgs/logo.png";
$i=strripos($url,"/");
$filename=substr($url,$i+1);
$i=strripos($url,".");
$ext=substr($url,$i);
echo $filename."<br>".$ext;//logo.png .png