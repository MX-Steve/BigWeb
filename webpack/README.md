# webpack #
## 1.概述 ##
	
>是一款加载器和打包工具：它能把各种资源(js/less/coffee/图片)等作为模块来使用处理并打包
>==>一句话：代码管理工具

## 2.安装和配置 ##

### 1.创建项目目录 ###
>mkdir myproject
### 2.进入目录 ###
>cd  myproject
### 3.初始化项目 ###
>npm init
  
  	生成配置文件:package.json
	在生成的package.json文件中的script里加入代码
	"webpack":"webpack --progress --colors"
	功能：之后编译方式：npm run webpack

### 4.全局安装webpack ###
>npm install webpack -g
### 5.本地安装 ###
>npm install webpack --save-dev
### 6.创建目录 ###
	dist
		生成的静态资源存放处
	src
		我们写的源文件
		script
		styles
### 7.创建文件 ###
>webpack.config.js
	
	webpack的配置文件
	module.exports = {
	    entry: "./src/script/main.js",
	    output:{
	        path:__dirname+"/dist/js",
	        filename:"bundle.js"
	    }
	};
	##entry：入口文件，即哪个文件需要生成
	##output:出口文件，即生成后的代码放在哪里