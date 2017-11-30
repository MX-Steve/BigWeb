SET NAMES UTF8;
DROP DATABASE IF EXISTS nj1708acl01;
CREATE DATABASE nj1708acl01 CHARSET=UTF8;
USE nj1708acl01;
CREATE TABLE t_user(
	id				INT PRIMARY KEY AUTO_INCREMENT,
	uname			VARCHAR(25) NOT NULL DEFAULT '',
	upwd			VARCHAR(32) NOT NULL DEFAULT '',
	utype			ENUM('1','0') NOT NULL DEFAULT '1'
);
#1   tom     123     0
#2   jerry   123     1
#3   kk      123     2
INSERT INTO t_user VALUES(null,'tom',md5('123'),'0');#md5('123')对密码123进行加密
INSERT INTO t_user VALUES(null,'jerry',md5('123'),'1');
INSERT INTO t_user VALUES(null,'kk',md5('123'),'1');