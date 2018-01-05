SET NAMES UTF8;
DROP DATABASE IF EXISTS dota;
CREATE DATABASE dota CHARSET=UTF8;
USE dota;
CREATE TABLE user(
     user_num INT PRIMARY KEY AUTO_INCREMENT,
     user_id VARCHAR(64),
     user_pswd VARCHAR(64),
     user_name VARCHAR(64),
     user_true_name VARCHAR(16),
     user_id_card VARCHAR(18),
     user_phone VARCHAR(32),
     user_email VARCHAR(64),
     user_addr VARCHAR(128),
     user_gender BOOL           #0-女 1-男 
);