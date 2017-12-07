
//Buffer 原生模块,全局模块，可以直接使用无需引入

//创建一个大小为2k字节的缓冲区
var buf1 = Buffer.alloc(1024*2);  //alloc 分配
console.log(buf1);
console.log(buf1.length);

//使用数组来初始化缓冲区
var buf3 = Buffer.from([10,20,30]);
var buf4 = Buffer.from("一二三");
console.log(buf3);
console.log(buf4);
console.log(buf4.toString());


