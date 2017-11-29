//1:页面加载完成执行如下程序  11:35--11:40
$(function(){
  //1.1:发送ajax请示获取商品类别列表
  //1.2:接收返回数据拼接下拉菜单
  $.ajax({
    type:"GET",
    url:"data/11_product_family_list.php",
    success:function(data){
      var html = "<option value='1'>--请选择--</option>";
      for(var obj of data){
        html += `
        <option value="${obj.fid}">${obj.fname}</option>
        `;
      }
      $("#family_id").html(html);
    },
    error:function(){alert("网络故障请检查");}
  });

  //2:获取提交按钮 btn1
  $("#btn1").click(function(){

   var titleReg = /^[\w\s\u4e00-\u9fa5]{1,}$/i;
   var t = $("#title").val();//获取用户输入标题
   if(!titleReg.test(t)){    //测试
     alert("标题格式不正确");  //如果错误提示消息
     return;                 //终止执行
   }
   //3:创建正则表达式验证

   //4:发送ajax请求 data/product_add.php
   //4.1:表单序列
   var data = $("#form-product").serialize();
   //5:发送AJAX提交表单信息
    $.ajax({
      type:"POST",
      url:"data/10_product_add.php",
      data:data,
      success:function(data){
        if(data.code>0){
          alert(data.msg);
        }else{
          alert(data.msg);
        }
      },
      error:function(){alert("网络故障，请检查!")}
    });
   //5:并且接收返回数据
  });

});



