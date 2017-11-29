USE xuezi;
SET NAMES UTF8;
CREATE TABLE xz_admin(
 id INT PRIMARY KEY AUTO_INCREMENT,
 uname  VARCHAR(20),
 upwd  VARCHAR(32),
 ctime DATETIME,
 cuid  INT,
 mtime DATETIME,
 muid  INT,
 expire enum('0','1'),
 v1    INT,
 v2    VARCHAR(255)
);

#添加测试数据
INSERT INTO xz_admin VALUES(NULL,'tom',md5('123'),now(),1,now(),0,'0',0,'');
INSERT INTO xz_admin VALUES(NULL,'jerry',md5('123'),now(),1,now(),0,'0',0,'');
INSERT INTO xz_admin VALUES(NULL,'kaka',md5('123'),now(),1,now(),0,'0',0,'');

#修改列属性 20-->32
alter table  xz_admin modify upwd varchar(32);


