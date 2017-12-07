/**
 * 接收一个URL字符串，解析出其中的各个不同部分
 * @param  url    要解析URL字符串
 * 形如:http://www.jd.com:8080/ad/index?pno=3
 * @return object 包含解析各个URL部分的对象
 */
function resolve(url){
  var result = {};
  //1:截取url协议
  var i1 = url.indexOf("://");
  result.protocol = url.substring(0,i1);
  //2:截取主机名称 www.jd.com
  var i2 = url.lastIndexOf(":");
  result.hostname = url.substring(i1+3,i2);
  //3:截取端口号
  var i3 = url.indexOf("/",i2);
  result.port = url.substring(i2+1,i3);
  //4:访问路径 /ad/index
  var i4 = url.indexOf("?");
  result.path = url.substring(i3,i4);
  //5:参数
  result.query = url.substring(i4+1);
  return result;
}

var url = "http://www.jd.com:8080/ad/index?uname=tom&pno=3";
var obj = resolve(url);
console.log(obj);

