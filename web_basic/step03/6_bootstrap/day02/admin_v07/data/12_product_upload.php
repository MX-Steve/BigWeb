<php
header("Content-Type:application/json;charset=utf-8");
require_once('00_init.php');
require_once("00_imageUtils.php");



/*
功能模块七：
    1.上传图片
    2.创建缩略图 sm md lg
    3.将数据信息添加数据库：xz_laptop_pic
        pid;laptop_id;sm;md;lg
*/
//1.上传图片
//1.0：如果上传文件的数组为空，出错
$rs = empty($_FILES);
if($rs){
    die('{"code":-1,"msg":"没有上传文件，请检查"}');
}

$filename = $_FILES['myfile']['name'];
$filesize = ceil($_FILES['myfile']['size']/1024);
if($filesize > 2048){//2MB
    die( '{"code":-2,"msg":"上传文件不能超过2M"}');
}
$type = strstr($filename,'.');
if($type !='.jpg' && $type != '.png' && $type != ".gif"){
    die( '{"code":-3,"msg":"上传格式不正确"}');
}
//生成一个新的文件名
$pic  = time().rand(1,9999).$type;
//临时文件位置
$src = $_FILES['myfile']['tmp_name'];
$des = "../upload/product/bs".$pic;
move_uploaded_file($src,$des);
//2.创建缩略图
/**
*参数1：原始路径
*/
mkThumbnail($des, 54, 54,"../upload/product/sm/".$pic);
mkThumbnail($des, 450, 450,"../upload/product/md/".$pic);
mkThumbnail($des, 54, 54,"../upload/product/lg/".$pic);


//echo '{"code":1,"msg":"上传成功"}';
//3.将数据信息添加到数据库 xz_laptop_pic
/**
*1.获取商品编号
*2.更新商品图片
*3.查看该商品是否存在图片信息
*4.如果没有添加
*5.如果有更新
*/















