/**
 * 接收一个URL字符串，解析出其中的各个不同的部分，
 * @param url 要解析的url字符串
 * 形如：http://www.jd.com:8080/ad/index?uname=tom&pno=3
 * @returns object 包含解析各个URL部分的对象
 *
 */
function resolve(url) {
    let result = {};
    //1.截取协议
    var i1 = url.indexOf("://");//找冒号的位置
    result.protocol = url.substring(0,i1);
    //2.截取主机名
    var i2 = url.lastIndexOf(":");
    result.hostname = url.substring(i1+3,i2);
    //3.截取端口号
    var i3 = url.indexOf('/',i2);
    result.port = url.substring(i2+1,i3);
    //4.截取路径
    var i4 = url.indexOf('?');
    result.path = url.substring(i3,i4);
    //5.获取参数
    result.query = url.substring(i4+1);




    return result;
}
module.exports.resolve = resolve;
