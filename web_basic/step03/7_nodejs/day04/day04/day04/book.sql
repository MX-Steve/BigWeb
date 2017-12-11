SET NAMES UTF8;
CREATE DATABASE dangdang CHARSET=UTF8;
USE dangdang;
CREATE TABLE book(
  id      INT PRIMARY KEY AUTO_INCREMENT,
  name    VARCHAR(100) NOT NULL DEFAULT '',
  price   DECIMAL(10,2) NOT NULL DEFAULT 0,
  pubdata DATETIME NOT NULL DEFAULT 0,
  expire  ENUM('1','0') NOT NULL DEFAULT '0'
);
CREATE TABLE user(
 uid      INT PRIMARY KEY AUTO_INCREMENT,
 uname    VARCHAR(25) NOT NULL DEFAULT '',
 upwd     VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO book VALUES(null,'三国演义1',100,'2000-01-01','0');
INSERT INTO book VALUES(null,'三国演义2',110,'2001-01-01','0');
INSERT INTO book VALUES(null,'三国演义3',120,'2002-01-01','0');
INSERT INTO book VALUES(null,'三国演义4',130,'2003-01-01','0');
INSERT INTO user VALUES(null,'tom',md5('123'));
INSERT INTO user VALUES(null,'jerry',md5('123'));
INSERT INTO user VALUES(null,'kk',md5('123'));

#SET NAMES UTF8;
#SOURCE E:/book.sql
#15:40--15:43
#为图片名称添加索引对象
ALTER TABLE book ADD INDEX (name);
#如果网络有图书搜索
#[三国]
#SELECT * FROM book WHERE name LIKE '三国%';






