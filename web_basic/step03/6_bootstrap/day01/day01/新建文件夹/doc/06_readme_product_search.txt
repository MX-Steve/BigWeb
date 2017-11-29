功能模块六:商品搜索显示

完成此功能需要程序
1:data/09_product_search.php
SELECT * FROM  xz_laptop
WHERE price >= 100 AND price <= 10000
AND lname LIKE "%华为%";


xz_laptop_pic  sm
xz_laptop      lid,lname,title,price
多条查询小技巧
(1)将多个表名保存FROM 后面用逗号分隔
FROM xz_laptop,xz_laptop_pic
(2)给每张表起一个别名
FROM xz_laptop l,xz_laptop_pic p
(3)查找二个表的关系(列)
WHERE l.lid=p.laptop_id

SELECT l.lid,l.lname,l.title,l.price,p.sm pic
FROM xz_laptop l,xz_laptop_pic p
WHERE
 l.lid=p.laptop_id
 AND
 l.lname LIKE '%M%'
 AND
 l.price <= 210000
 AND
 l.price >= 7000
 GROUP BY l.lid
 LIMIT 0,8



2:product_search.html
[华为  ]商品名称
[100  ]下限
[10000]上限

3:js/product_list.js

