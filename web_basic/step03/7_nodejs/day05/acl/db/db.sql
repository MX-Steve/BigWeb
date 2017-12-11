#第二种权限管理方式
#1:创建库  web1708acl02
CREATE DATABASE web1708acl02 CHARSET=UTF8;
#2:进入库
USE web1708acl02;
#3:创建5张表
#t_user  [uid/uname/upwd]
CREATE TABLE t_user(
 uid   INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(25) NOT NULL DEFAULT '',
 upwd VARCHAR(32) NOT NULL DEFAULT ''
);
#t_role  [rid/rname]
CREATE TABLE t_role(
  rid INT PRIMARY KEY AUTO_INCREMENT,
  rname VARCHAR(50) NOT NULL DEFAULT ''
);
#t_user_role[id/rid/uid]
CREATE TABLE t_user_role(
  id INT PRIMARY KEY AUTO_INCREMENT,
  rid INT NOT NULL DEFAULT 0,
  uid INT NOT NULL DEFAULT 0
);
INSERT INTO t_user VALUES(1,'tom',md5('123'));
INSERT INTO t_user VALUES(2,'jerry',md5('123'));
#用户超级用户，它可以执行任何用户-->操作
INSERT INTO t_user VALUES(3,'admin',md5('11|~ac^++__/'));
INSERT INTO t_role VALUES(1,'超级管理员');
INSERT INTO t_role VALUES(2,'普通管理员');
INSERT INTO t_role VALUES(3,'财务管理员');

INSERT INTO t_user_role VALUES(null,1,3);
INSERT INTO t_user_role VALUES(null,2,3);
INSERT INTO t_user_role VALUES(null,3,3);
INSERT INTO t_user_role VALUES(null,2,1);
INSERT INTO t_user_role VALUES(null,2,2);


#t_module[mid/mname,pid,sn,level]
CREATE TABLE t_module(
 mid   INT PRIMARY KEY AUTO_INCREMENT,
 mname VARCHAR(100) NOT NULL DEFAULT '',
 pid   INT NOT NULL DEFAULT 0,
 sn    VARCHAR(100) NOT NULL DEFAULT '',
 `level` INT NOT NULL DEFAULT 0
);
INSERT INTO t_module VALUES(null,'总公司',0,'1',1);
INSERT INTO t_module VALUES(null,'北京分公司',1,'1_2',2);
INSERT INTO t_module VALUES(null,'上海分公司',1,'1_3',2);
#t_acl   [aid/mid/rid/c/r/u/d]
CREATE TABLE t_acl(
 aid INT PRIMARY KEY AUTO_INCREMENT,
 mid INT NOT NULL DEFAULT 0,
 rid INT NOT NULL DEFAULT 0,
 c   ENUM('1','0') NOT NULL DEFAULT '0',
 r   ENUM('1','0') NOT NULL DEFAULT '0',
 u   ENUM('1','0') NOT NULL DEFAULT '0',
 d   ENUM('1','0') NOT NULL DEFAULT '0'
);
INSERT INTO t_acl VALUES(null,1,1,'1','1','1','1');
INSERT INTO t_acl VALUES(null,2,1,'1','1','1','1');
INSERT INTO t_acl VALUES(null,3,1,'1','1','1','1');
INSERT INTO t_acl VALUES(null,1,2,'0','1','0','0');
INSERT INTO t_acl VALUES(null,2,2,'0','1','0','0');
INSERT INTO t_acl VALUES(null,3,2,'0','1','0','0');



#问题:
#1:如果用户登录 tom/123
#2:t_user 表是否存在记录  ok
#3:查找  tom/123拥有哪些角色
#  t_user_role ===>2  依据2 t_role =>2 普通管理员
#4:查找  rid=2普通管理权限
#  t_acl
#  rid = 2    mid(1,2,3) read读取
#
#问题:
#1:如果用户登录    admin/11|~ac^++__/
#2:t_user 表是否存在记录  ok
#3:查找 admin/11|~ac^++__/ 123拥有哪些角色
#  t_user_role =>(1,2,3) => t_role (超级管理员/普通用户/财务)
#4:查找 rid(1,2,3)
#  t_acl
#  mid   1 1 1 1 结果权限集合 1|1=1  1|0=1 0|1=1

