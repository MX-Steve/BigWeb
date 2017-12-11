实现权限管理
 a:在用户表添加一个用户类型(*)
   t_user
   id name   pwd    type
   1  tom    123    0   #管理员
   2  jerry  123    1   #普通用户
   3  kk     123    1   #普通用户
   if(u.type==0){
      del
      update
      save
   }
  b:创建方法(9:27-9:32)
  (0)创建库   wsl1708acl01
  (1)创建表   t_user [id/name/pwd/type]
  (2)添加记录 3条记录
     user/db/db.sql
  (3)创建登录模块
     a:user/data/01_login.php
     b:user/login.html
     c:user/login.js
  (4)创建用管理模块
     a:user/data/02_userlist.php
     b:user/main.html
     c:user/main.js





