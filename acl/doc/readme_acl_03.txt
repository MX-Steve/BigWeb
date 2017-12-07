
权限管理:
(1)用户拥有角色
  (*)超级管理员------->当前用户(tom 3)->拥有( 1超级管理员角色)
  ()财务主管
(2)保存表 t_user_role
   id uid rid
   1  3   1
完成功能
a:data/06_user_role.php
  获取二个参数 uid rid
  添加 INSERT
b:role.js

给角色授权
role.html

1:角色列表
  1:超级管理员 {授权}
  2:普通管理员 {授权*}
  3:财务管理员 {授权}
acl.html
      给[普通管理员]授权
      模块列表    操作
                 C   R  U  D
      商品管理    [*] [*][] []
      用户管理    [*] [] [] []
      订单管理    [*] [] [] []

t_acl; id/mid/rid/c/r/u/d







