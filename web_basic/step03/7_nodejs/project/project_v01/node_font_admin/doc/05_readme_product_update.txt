功能模块五:更新指定商品价格

完成此功能需要程序
1:
data/07_product_find.php   依据id查询商品信息
SELECT lid,lname,price FROM xz_laptop
WHERE lid = ?

data/08_product_update.php
lid/price
UPDATE xz_laptop SET price = ?
WHERE lid = ?

2:product_list.html
3:js/product_list.js
中间人:发送ajax请求php获取数据->显示html

