
    功能模块八:登录、分页、添加、更新、删除、上传
    完成此功能需要程序
    权限管理:
        1.什么是权限管理：谁能做哪些事情，不能做哪些事情

        tom     系统管理员（所有功能模块：读取、更新、删除、添加）
        jerry   普通用户（读取）
        kk      普通用户，财务主管理（读取，财务模块（读取、更新、删除、添加））

        2.实现权限管理
            a：在用户表中添加一列：用户类型
                t_user
                    id  name    pwd   type
                    1   tom     123     0
                    2   jerry   123     1
                    3   kk      123     2
                if(u.type == 0){
                    del/update/save
                }
            b：创建5张表完成权限管理(RBAC：基于角色的访问控制)
                用户：登录系统账户(name/upwd)
                角色：是一组权限集合(系统管理员40，普通用户3，财务主管5)
                用户和角色的关系表:哪个用户拥有哪些角色
                模块：项目的组成部分(商品管理、用户管理、订单管理)
                权限表：哪个角色拥有哪个模块的什么操作  C  R  U  D
                t_user      用户表(uid,uname,upwd)
                t_role      角色表(rid,rname)
                t_user_role 用户和角色的关系表(id,rid,uid)
                t_module    模块表(id,mname,pid,sn,level)
                    pid:(上一级机构公司的id)==>只适合找上下级
                    sn:(层级的编号) 顶层公司写自己的id，其他级别的写上一级的sn_自己id ==>上海公司所有下属机构
                    id     mname                 pid(上一级机构公司的id)     sn(层级的编号)      level(有上下级关系-->树)
                    1      总公司财务               0                             1                1
                    2      上海分公司财务           1                             1_2               2
                    3      北京路子公司财务         2                             1_2_3             3
                    4      北京分公司财务           1                             1_4               2
                    5      万寿路子公司财务         4                             1_4_5             3
                    6      南京路子公司财务         2                             1_2_6             3

                t_acl       权限表(id,mid,rid,c,r,u,d)
									mid:模块编号
									rid:角色编号
									c:创建
									r:查找:分页
									u:更新
									d:删除

									id    mid   rid   c   r  u  d   enum('1','0');
									1      1     1    1   1  1  1
									2      2     1    0   0  0  0


第一种练习：
	创建方法：
		0.创建库：nj1708acl01
		1.创建表
			t_user(id/name/pwd/type);
		2.添加三条记录
		3.创建登录模块
			1.usermanager/data/01_login.php
			2.usermanager/login.html
			2.usermanager/login.js
		4.创建用户管理模块
			1.usermanager/data/01_userlist.php
			2.usermanager/main.html
			2.usermanager/main.js




#================================
授权操作：
    1.新用户拥有指定的角色*（角色拥有新用户）
        用户管理模块
            10   tom1   管理员       [拥有角色]
                [[]超级管理员]
                [[]普通管理员]
                [[]财务管理员]
                t_user_role
                    uid:10   rid:1
           php: 1.查询用户列表        data/01_user_list.php
                2.查询角色列表        data/02_role_list.php
                3.添加/删除           data/03_user_role_update.php
    2.角色授权（模块  c[],r[],u[],d[]）；
认证操作：
    1.用户登录->role->t_acl->session
        示例：tom->用户管理【读取、删除】
        main.html:
            编号      名称      类型
            1         tom     管理员  【del】



权限管理：
    1.用户拥有角色
        (*)超级管理员-->当前用户要拥有超级管理员


1.角色列表
    1.超级管理员[]
    2.普通管理员[]
    3.财务管理员[]




