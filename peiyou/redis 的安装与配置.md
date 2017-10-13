# redis（内存数据库）的安装与配置 #
****
## 特点
	
	1.速度异常快速，
	2.支持丰富的数据类型
	3.属于缓存数据库的第二代产品
## redis 与 memcahed 区别
	redis支持更多数据类型
	redis支持数据持久化--》保存到磁盘
## 说明 ##
redis提供给我们的源代码是程序包
鉴于我买的服务器是linux系统配置，已经redis实际的应用环境，准备在Linux系统下完成redis数据库安装与配置
## 步骤
###1.网上下载redis安装包，redis-4.0.2.tar.gz，解压到“/usr/local/src”目录中解压redis安装包

	 tar xzvf redis-4.0.2.tar.gz 进行解压缩
###2.进入解压后的路径：

	cd /usr/local/src/redis-4.0.2/
###3.进行程序的编译处理，
	 make   （c的编译中）
###4.编译完成之后要进行redis安装，
	make install 正在编译
###5.redis属于内存数据库，那么如果你现在是一台单独的redis服务器，则应该考虑将所有的可用内存都交给redis分配，理论上要执行如下代码：
	
	echo "vm.overcommit_memory=1">>/etc/sysctl.conf
###6.将以上的配置写入到内核参数之中：
	/sbin/sysctl -p
###7.为了方便使用redis数据库，那么建立一个redis支持的命令工具目录
	cd /
	mkdir -p /usr/local/redis/{bin,conf}
###8.通过源代码目录拷贝出redis所需要的工具
	//拷贝redis服务启动程序
	cp /usr/local/src/redis-4.0.2/src/redis-server /usr/local/redis/bin
	//拷贝redis命令行客户端
	cp /usr/local/src/redis-4.0.2/src/redis-cli /usr/local/redis/bin
	//拷贝性能测试工具
	cp /usr/local/src/redis-4.0.2/src/redis-benchmark /usr/local/redis/bin
###9.拷贝出一个配置文件
	cd /
	cp /usr/local/src/redis-4.0.2/redis.conf /usr/local/redis/conf

这样就表示当前的redis数据库已经将所有的程序文件安装成功

##——作者：mx-开拓者[http://github.com/MX-Steve](http://github.com/MX-Steve "github")