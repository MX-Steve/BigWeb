/**1.页面加载完成，执行如下程序**/
$(function () {
    //1.1:发送ajax请求，获取产品类别列表
    //1.2:接收返回的数据，拼接下拉菜单
    $.ajax({
        type:'GET',
        url:'data/11_product_family_list.php',
        success(data){
            console.log(data);
            var html = `<option value="1">--请选择--</option>`;
            for(var i=0;i<data.length;i++){
                var item = data[i];
                html +=`<option value="${item.fid}">${item.fname}</option>`;
            }
            $("[name='family_id']").html(html);
        },
        error(){
            alert("网络故障，请检查");
        }
    });

    // 2.获得提交按钮btn1
    $("#btn1").click(function () {
        // 3.创建正则表达式验证
       var titleReg = /^[\w\s\u4e00-\u9fa5]{1,}$/i;
       var t = $("#title").val();
       if(!titleReg.test(t)){
           alert("标题格式不正确");
           return;
       }
       //发送ajax提交表单信息
       $.ajax({
           type:'POST',
           url:'data/10_product_add.php',
           data:$("#form-product").serialize(),
           success(data){
               console.log(data);
           },
           error(){
               alert("网络故障，请检查");
           }

       });
    });

    // 4.发送ajax请求，data/product_add.php
    // 5.并且接受返回的数据
});
