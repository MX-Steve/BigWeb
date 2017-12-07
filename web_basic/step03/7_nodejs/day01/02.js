let stus = [
    {uname:'张三1',score:98},
    {uname:'张三2',score:95},
    {uname:'张三3',score:48},
    {uname:'张三4',score:78},
    {uname:'张三5',score:95}
];
for(var i=0;i<stus.length;i++){
    var stu = stus[i];
    console.log("方法1："+stu.score);
}
for(var stu of stus){
    console.log("方法2："+stu.score);
}
for(var i in stus){
    console.log(stus[i].score);
}