1:创建学子商城后台管理员表
注意事项:
1:表名，列名全小写
2:每张表必须的主键id
3:重要内容表
4:添加列创建记录时间
5:添加列创建用户id
6:添加列修改记录时间
7:添加列修改用户id
8:添加列冗余字段 小表2个(1 int 1 varchar )大表4个
9:添加列  expire 失效字段 enum('0','1')
10:密码必须加密保密处理

2:密码加密处理
加密:
原文:123456
      |加密
密文:8sdd7afsdh23389d3723uxhe83
加密方式:
1:单向不可逆(只能加密没有解密方法)
2:对称加密  (加密有解密)
3:非对称加密(安全级别最高)
如何实现加密操作
(1)js 自己写一个加密算法
(2)php自己写一个加密算法
(3)mysql 自带函数 md5();

示例:
SELECT md5('123456');
md5加密结果 128位密码->32位字符
e10adc3949ba59abbe56e057f20f883e

3:解密方式
碰撞测试
SELECT md5('122%_ {}`--`!exp~11138djh387yn2322__-');
7ebf7d8f36cb3e27ce17ed497adf5f82
4:多次加密
md5(md5(md5('123456')));
5:其它加密算法
AES
SHA2 加密算法  512位


流程:
1:添加测试数据
  INSERT INTO xz_admin VALUES(null,'tom',md5('123456'),......);
2:登录流程
  tom/123456
  SELECT * FROM xz_admin
  WHERE uname='$uname' AND upwd='md5($upwd) ;

#模块一:后台管理员登录
1:admin/data/01_login.php
2:admin/index.html  [己存在]
3:admin/js/index.js
