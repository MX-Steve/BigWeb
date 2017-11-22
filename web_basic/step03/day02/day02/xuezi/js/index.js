//模块一:后台管理员登录
//1:获取登录按钮  9:53--10:05
$("#btn").click(function(e){
// console.log(1);
//2:绑定点击事件  (a,submit)一定阻止默认行为
//3:阻止事件默认行为
e.preventDefault();
//console.log(2);
//4:获取用户输入 用户名和密码
var u = $("#uname").val();
var p = $("#upwd").val();
//console.log(3);
//console.log(u+"_"+p);
//5:创建正则表达式二个
var unameReg = /^[a-z0-9]{3,12}$/i;
var upwdReg = /^[a-z0-9]{3,12}$/i;
//console.log(4);
//console.log(unameReg+"_"+upwdReg);
//6:验证用户名和密码格式如果不正确停止
if(!unameReg.test(u)){
  alert("用户名格式不正确,请检查后再试");
  return;
}
//console.log(5);
if(!upwdReg.test(p)){
    alert("密码格式不正确,请检查后再试");
    return;
 }
//console.log(6);
//7:发送ajax请示 data/01_login.php
$.ajax({
  url:"data/01_login.php",
  type:"POST",
  data:{uname:u,upwd:p},
  success:function(data){
    //console.log(7);
    //console.log(data);
    //8:获取返回结果
    //9:错误返回信息  -> alert()提示
    //10:如果返回成功能->跳转 main.html
    if(data.code==0){
      alert("登录成功");
      location.href = "main.html";
    }
  },
  error:function(){
    //11:如果网络故障提示
    //console.log(8);
    alert("网络发了故障，请检查");
  }
});
//10:45---10:55 调错
});

