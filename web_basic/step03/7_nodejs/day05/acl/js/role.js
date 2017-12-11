$(function(){

  $.ajax({
    url:"data/01_user_list.php",
    type:"GET",
    success:function(data){
      var html = "";
      for(var i=0;i<data.length;i++){
        var obj = data[i];
        html += `
        <tr>
            <td>${obj.uid}</td>
            <td>${obj.uname}</td>
            <td>
              <a href="${obj.uid}" class="btn-del">删除</a>
              <a href="${obj.uid}" class="btn-update">更新</a>
              <a href="${obj.uid}" class="btn-detail">详情</a>
              <a href="${obj.uid}" class="btn-role">拥有角色</a>
             </td>
        </tr>          
        `;
      }
      $("#tbody1").html(html);
    },
    error:function(){
      alert("网络故障请检查!");
    }
  });
});


//模块二:获取所有当前用户{己拥有}角色列表
$("#tbody1").on("click","a.btn-role",function(e){
  e.preventDefault();
  var uid = $(this).attr("href");
  $(".roleList").show();
  //1:发送ajax请示  9:30--9:33
  $.ajax({
    type:"GET",
    url:"data/04_role_list.php",
    data:{uid:uid},
    success:function(data){
      //console.log(data);
      //4:获取返回结果拼接字符串并且创元素
      //5:.lists3
      var html = "";
      for(var item of data){
        html += `
         <li>${item.rname}</li>
        `;
      }
      $(".lists3").html(html);
    },
    error:function(){
      alert("网络故障请检查");
    }
  });


  //9:40--9:45
  //1:发送ajax请示 05_role_list.php
  $.ajax({
    type:"GET",
    url:"data/05_role_list.php",
    data:{uid:uid},
    success:function(data){
      var html = "";
      for(var obj of data){
        html += `
        <li>
          <input type="radio" value="" 
          data-role="${uid}_${obj.rid}" name="rname" class="btn_role"/>
          ${obj.rname}
        </li>
        `;
      }
      $(".lists2").html(html);
    },
    error:function(){
      alert("网络故障，请检查");
    }
  });
  //2:获取返回列表
  //3:创建dom
  //    (*) 系统管理员
  //    ()  财务主管
  //4:
});

//5:为单选框绑定点事件
//uid rid 添加 t_user_role 表即可
$(".lists2").on("click",".btn_role",function(e){
  //阻止事件默认行为
  e.preventDefault();
  //获取角色编号与用户编号,折分
  var list = $(this).data("role").split("_");
  //获取uid rid
  var uid = list[0];
  var rid = list[1];
  //发送ajax 请求
  $.ajax({
    type:"POST",
    url:"data/06_user_role.php",
    data:{uid:uid,rid:rid},
    success:function(data){
      if(data.code>0){
        alert(data.msg);
        $(".roleList").hide();
      }else{
        alert(data.msg);
      }
    },
    error:function(){alert("网络故障请检查")}
  });


});
















