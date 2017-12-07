/**
 * 创建一个文件模块，定义一个常量 PI，声明一个方法getSize(r),根据掺入圆形的半径，返回其面积，以及一个方法getPerimiter(r);
 * 根据半径返回周长，再创建一个应用程序，引入这个js，调用两个公开方法
 */
const PI = 3.14;

function getSize(r) {
    return PI*r*r;
}
function getPerimeter(r) {
    return 2*PI*r;
}
//导出方式1：
//module.exports.getSize = getSize;
//module.exports.getPerimeter = getPerimeter;

//导出方式2:
//exports.getSize = getSize;
//exports.getPerimeter = getPerimeter;

//导出方式3:
module.exports = {
    size:getSize,
    perimeter:getPerimeter
}