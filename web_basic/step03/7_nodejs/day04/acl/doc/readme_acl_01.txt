
权限管理:
(1)什么是权限管理:谁能作哪些事情不能作哪些事情

   创建5张表完成权限管理(RBAC 基于角色的访问控制)

   用户:登录系统帐户(name/upwd)
   角色:是一组权限集合(系统管理员40/普通用户3/帐务主管5)
   用户和角色关系表:哪个用户拥有哪些角色
   模块:项目组成部分(商品管理/用户管理/订单管理)
   授权:哪个角色拥有哪个模块的什么操作 C R U D

   t_user      用户表(uid/uname/upwd)
   t_role      角色表(rid/rname)
   t_user_role 用户和角色关系表(id/rid/uid)
   t_module    模块表(id/mname/pid/sn/level)

   mname 模块名称
   pid:上一级公司id
   作用:找直接上一级公司与直接下一级公司
   sn:顶级编号(自己id)其它级别上一级sn_自己id

    id mname         pid    sn     level  模块表(上下级关系->树)
    1  总公司财务       0     1      1
    2  上海分公司财务    1     1_2    2
    3  北京路子公司财务  2     1_2_3  3
    4  北京分公司财务    1     1_4    2
    5  万寿路子公司财务  4     1_4_5  3
    6  南京路子公司财务  2     1_2_6_

   t_acl       权限(授权)表(id/mid/rid/c/r/u/d)
    id mid rid c r u d enum('1','0')
    1  1    1  1 1 1 1
    2  2    1  0 0 0 0

   mid : 模块编号
   rid : 角色编号
   c   : 创建 create [添加新用户/添加新商品]
   r   : 读取 select [分页]
   u   : 更新 update [更新价格]
   d   : 删除 delete [删除]

#----------------------------------

授权操作:
(1)新用户拥有指定的角色[角色拥有新用户]
   用户管理模块
   1  tom1 管理员    [拥有角色]
   2  tom2 管理员    [拥有角色]（*）
   3  tom3 管理员    [拥有角色]
   [()普通管理员]
   【己拥有角色】
    1    超级管理员
    3    财务主管员
   t_user_role
   uid10  rid 1  10:30--10:35
   (1)查询用户列表  data/01_user_list.php
   (2)查询角色列表  data/02_role_list.php
   (3)用户拥有角色列表  data/04_role_list.php
   (4)用户未拥有角色列表  data/05_role_list.php



(2)角色授权(模块 C[]R[]U[]D[])
认证操作:
(1)用户登录->role->t_acl-> session
   示例;tom/123-->用户管理[读取/删除]
   main.html
   编号 名称  类型
   1   tom   管理   [del]







