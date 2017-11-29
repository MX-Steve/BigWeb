功能模块三:删除指定商品

完成此功能需要程序
1:data/product_del.php
  删除功能实现方式一:
  UPDATE xz_laptop SET expire = '1' WHERE lid=10;
  删除功能实现方式二:
  DELETE FROM xz_laptop WHERE lid = 10;

2:product_list.html
3:js/product_list.js
  中间人:发送ajax请求php获取数据->显示html


错误集锦:
1:所有按钮看不到 删除/更新/详细
  按钮js创建--->找到哪行创建按钮..
  console.log(obj.expire);//undefined
  解决问题:
  php没有查询出该列 expire
2:网络故障请检查
  F12->NETWORK->05_product_del.php->response

  问题:lid参数没有传递成功
<br />
<b>Notice</b>:  Undefined index: lid in
 <b>C:\xampp\htdocs\html5\admin\data\05
 _product_del.php</b> on line <b>5
 解决问题:看js

3:{"code":1,"msg":删除成功}
json 语法错误,不是标准json

解决
{"code":1,"msg":"删除成功"}








