# Linux全局配置node和npm小结 #

## 1.安装与配置 ##

	1.将node安装包放入linux服务器，
	2.tar -xvf node.8-linux-x64.tar 安装
	3.ln node安装目录 /usr/local/bin/node（全局配置node）
	4.ln npm安装目录 /usr/local/bin/npm （全局配置npm）
	注意：3.4两步需要在根目录执行
	5.输入 node -v 和 npm -v 出现版本号，即成功

## 2.配置全局报错 ##
	
	unable to locate package npm ...

>错误原因：

	之前安装过node，又装了一个新版本，没有执行更新操作，导致配置出错

>解决方案：

	apt-get update (更新)
	apt install npm (下载安装新npm)
	ln npm安装目录 /usr/local/bin/npm （全局配置npm）
	npm -v 即可出现版本号