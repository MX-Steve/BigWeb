<?php
    //1.设置响应头
    header("Content-Type:application/json;charset=utf-8");
    //2.获取上传文件的名称
    $filename = $_FILES['myfile']['name'];
    //3.获取上传文件的大小
    $filesize = ceil($_FILES['myfile']['size']/1000);
    //4.判断：如果大小大于512k
    if($filesize > 512){
        //5.停止php执行
        die( '{"code":-1,"msg":"上传文件不能超过512k"}');

    }
    //6.获取后缀
    $type = strstr($filename,'.');
    //7.若果后缀不是.png,.jpg,.gif
    if($type!=".png" && $type != ".jpg" && $type != ".gif"){
        //8.停止php执行
        die('{"code":-2,"msg":"上传的不是图片"}');

    }
    //9.创建新上传文件名
    $pics = time().rand(1,9999).$type;
    //10.获取上传文件临时文件名
    $src = $_FILES['myfile']['tmp_name'];
    //11.将临时文件名移动upload下
    $des = "upload/".$pics;
    move_uploaded_file($src,$des);
    //12.输出上传成功json
    echo '{"code":1,"msg":"上传文件成功"}';
?>