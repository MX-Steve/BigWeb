//(function(exports,require,module,__filename,__dirname){


var str = '';
for(var i=1;i<=9;i++){
    for(var j=1;j<=i;j++){
        //es6新特性，在nodejs中不存在兼容性问题
        str += `${i}+${j}=${i+j} `;
    }
    str +="\r\n";
}
console.log(str);

//exports:{}用户声明想外部导出自己的成员
//require:fn 用户导入其他模块，并且创建指定模块对象
//__filename
//__dirname

//})