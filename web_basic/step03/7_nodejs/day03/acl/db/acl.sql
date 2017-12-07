SET NAMES UTF8;
DROP DATABASE IF EXISTS web1708acl02;
CREATE DATABASE web1708acl02 CHARSET=UTF8;
USE web1708acl02;
CREATE TABLE t_user(
    uid     INT PRIMARY KEY AUTO_INCREMENT,
    uname   VARCHAR(25) NOT NULL DEFAULT '',
    upwd    VARCHAR(25) NOT NULL DEFAULT ''
);

CREATE TABLE t_role(
    rid     INT PRIMARY KEY AUTO_INCREMENT,
    rname   VARCHAR(50) NOT NULL DEFAULT ''
);

CREATE TABLE t_user_role(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    rid     INT NOT NULL DEFAULT 0, #角色编号
    uid     INT NOT NULL DEFAULT 0  #用户编号
);

INSERT INTO t_user VALUES(1,'tom',md5('123'));
INSERT INTO t_user VALUES(2,'jerry',md5('123'));
#一个极为特殊的管理员，他可以执行任何用户==>操作
INSERT INTO t_user VALUES(3,'admin',md5('11~ac^++__/|'));

INSERT INTO t_role VALUES(1,'超级管理员');
INSERT INTO t_role VALUES(2,'普通管理员');
INSERT INTO t_role VALUES(3,'财务管理员');

INSERT INTO t_user_role VALUES(NULL,1,3);#用户3拥有角色1,2,3
INSERT INTO t_user_role VALUES(NULL,2,3);
INSERT INTO t_user_role VALUES(NULL,3,3);

INSERT INTO t_user_role VALUES(NULL,2,1);
INSERT INTO t_user_role VALUES(NULL,2,2);

CREATE TABLE t_module(
    mid     INT PRIMARY KEY AUTO_INCREMENT,     #模块编号
    mname   VARCHAR(100) NOT NULL DEFAULT '',   #模块名称
    pid     INT NOT NULL DEFAULT 0,             #上一级编号
    sn      VARCHAR(100) NOT NULL DEFAULT '',   #
    level   INT NOT NULL DEFAULT 0              #等级
);

INSERT INTO t_module VALUES(null,'总公司',0,'1',1);
INSERT INTO t_module VALUES(null,'北京分公司',1,'1_2',2);
INSERT INTO t_module VALUES(null,'上海分公司',1,'1_3',2);

CREATE TABLE t_acl(
    aid     INT PRIMARY KEY AUTO_INCREMENT,     #权限编号
    mid     INT NOT NULL DEFAULT 0,
    rid     INT NOT NULL DEFAULT 0,
    c       ENUM('1','0') NOT NULL DEFAULT '0', #ENUM:枚举
    r       ENUM('1','0') NOT NULL DEFAULT '0',
    u       ENUM('1','0') NOT NULL DEFAULT '0',
    d       ENUM('1','0') NOT NULL DEFAULT '0'
);
INSERT INTO t_acl VALUES(NULL,1,1,'1','1','1','1');#超级用户
INSERT INTO t_acl VALUES(NULL,2,1,'1','1','1','1');
INSERT INTO t_acl VALUES(NULL,3,1,'1','1','1','1');

INSERT INTO t_acl VALUES(NULL,1,2,'0','1','0','0');#普通管理员
INSERT INTO t_acl VALUES(NULL,2,2,'0','1','0','0');
INSERT INTO t_acl VALUES(NULL,3,2,'0','1','0','0');

--#问题
--    1.如果有个用户登录：tom/123
--    2.t_user 表是否存在记录 ok
--    3.查找  tom拥有哪些角色
--        t_user_role==>2  依据2去 t_role =>2 普通管理员
--    4.查找  rid = 2 普通管理员
--        t_acl
--        rid = 2   mid(1,2,3) read读取权限;

