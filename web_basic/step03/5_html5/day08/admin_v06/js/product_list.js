//模块二:分页显示产口列表
//1:创建函数

/**
 * 分页显示产品列表数据
 * @param pno       页码:        示例  1 2 3
 * @param pageSize  当前页记录数
 */
function loadProductByPage(pno,pageSize){
  //*1:发送ajax请示获取当前页数据内容  9:35--9:45
  //*2:获取返回结果数据
  $.ajax({
    type:"GET",
    url:"data/04_product_list.php",
    data:{pno:pno,pageSize:pageSize},
    success:function(data){
      console.log(1);
      console.log(data);
      //*3:动态创建表格中多行 id="tbody1"
      //*4:如果当前元素己失效,不创建  删除/更新/详细信息按钮
      var rows = data.data;
      var html = "";                 //声明空字符串
      for(var i=0;i<rows.length;i++){//循环拼接
          var obj = rows[i];
          html += `
              <tr>
                <td>
                  <div class="checkbox" style="margin: 0;">
                    <label>
                      <input type="checkbox">全选
                    </label>
                  </div>
                </td>
                <td>${obj.lid}</td>
                <td></td>
                <td></td>
                <td>${obj.title}</td>
                <td>${obj.spec}</td>
                <td>${obj.price}</td>
                <td>`;


if(obj.expire==0) {
  html += `  
<a href="${obj.lid}" data-pno="${data.pno}" class="btn-del">删除</a>
<a href="${obj.lid}" data-pno="${data.pno}" class="btn-update">更新</a>
<a href="${obj.lid}" data-pno="${data.pno}" class="btn-detail">详细信息</a>
`;
}
html +=`</td></tr>`;
}//for end


$("#tbody1").html(html);       //保存tbody
//5:动态创建分页条 1 2 【3】 4 5 最多5页
var html = "";
//上上一页
if(data.pno-2>0){
 html += `<li><a href="#">${data.pno-2}</a></li>`;
}
//上一页 10:53--11:03
if(data.pno-1>0){
html += `<li><a href="#">${data.pno-1}</a></li>`;
}
//当前页
html += `<li class="active"><a href="#">${data.pno}</a></li>`;
//下一页
if(data.pno+1<=data.pageCount){
html += `<li><a href="#">${data.pno+1}</a></li>`;
}
//下下一页
if(data.pno+2<=data.pageCount){
  html += `<li><a href="#">${data.pno+2}</a></li>`;
}
$("#pagination").html(html);
},
    error:function(){
      //(1)404
      //(2)不是json   F12->network->response
      //(3)语法错误
      alert("网络故障请检查!");
    }
  });
}
//6:默认调用第一页
loadProductByPage(1,8);
//7:为分页条中每个页码添加点击事件
$("#pagination").on("click","li a",function(e){
  console.log(1);
  //7.1 阻止事件默认行为
  e.preventDefault();//a submit 都要阻止默认行为
  console.log(2);
  //7.2 获取当元素页码
  var pno = $(this).html();
  console.log(3+pno)
  //8:不同页码调用 loadProductByPage()
  loadProductByPage(pno,8);
});


//=========================================
//模块三:删除指定商品  9:55--10:05
//1:获取所有删除按钮 事件代理  .btn-del
$("#tbody1").on("click","a.btn-del",function(e){
  //2:绑定点击事件
  //3:阻止事件默认行为
  e.preventDefault();
//3.1:提示 window.confirm("是否删除该商品")
  var rs = window.confirm("是否删除该商品");
  if(!rs){
    return;//如果用户点击"否",不再执行后续代码
  }
//4:获取商品编号
  var lid = $(this).attr("href");
//4.1:获取当前页数
  var pno = $(this).data("pno");
//5:发送ajax请求 05_proudct_del.php
  $.ajax({
    type:"POST",
    url:"data/05_product_del.php",
    data:{lid:lid},
    success:function(data){
      //console.log(3);
      //console.log(data);  10:35--10:40
      if(data.code>0){
        alert(data.msg);
        loadProductByPage(pno,8);
      }else{
        alert(data.msg);
      }
    },
    error:function(){
      //404 json php语法出错
      alert("网络故障请检查");
    }

  });
//6:获取返回结果  json  code > 0 删除成功
});



//模块四:产品详细信息 11:45--11:55
//1:获取详细按钮绑定点击事件:事件代理
$("#tbody1").on("click","a.btn-detail",function(e){
  //1.1:阻止事件默认行为
  e.preventDefault();
  console.log(1);
  //2:获取产品编号lid
  var lid = $(this).attr("href");
  console.log(2);
  console.log(lid);
  //3:发送ajax请求
  $.ajax({
    type:"GET",
    url:"data/06_product_detail.php",
    data:{lid:lid},
    success:function(data){
      console.log(3);
      //4:获取返回商品信息
      console.log(data);
      //5:将商品信息绑定 .detail-jumbotron
      var div = $(".detail-jumbotron");
      div.find(".plid").html(data.lid);     //编号
      div.find(".ppname").html(data.lname);//商品名称
      div.find(".pcategory").html(data.category);//类别
      div.find(".pprice").html(data.price);//价格
      div.find(".pos").html(data.cpu);      //os
      div.find(".pdisk").html(data.disk);  //磁盘
      div.show();
      //pname lid price ...
      //6:显示 detail-jumbotron
    },
    error:function(){
      //json接错 php语法  404
      alert("网络故障请检查..");
    }
  });
});
//点击[详细情况div]关闭按钮->隐藏div元素
$("#detail_close").click(function(e){
  e.preventDefault();//a
  $(".detail-jumbotron").hide();
});




//模块五:更新商品价格
//5.1 点击更新按钮->查询指定商品信息->显示div
//1:获取更新按钮 事件代理
$("#tbody1").on("click","a.btn-update",
function(e){
  e.preventDefault();
  //2:获取lid
  var lid = $(this).attr("href");
  //3:发送ajax请示获取商品信息
  $.ajax({
    type:"GET",
    url:"data/07_product_find.php",
    data:{lid:lid},//10:31--10:33
    success:function(data){
      //4:保存 update-jumbotron .pname  .input-price
      var $div = $(".update-jumbotron");
      $div.find(".pname").html(data.lname);
      $div.find(".input-price").val(data.price);
      $div.find(".lid").html(data.lid);
      //5:显示div
      $div.show();
    },
    error:function(){
      alert("网络故障请检查");
    }
  });
});

//5.2 点击提交按钮->更新商品价格->隐藏div
//1:用户点击取消按钮,隐藏更新div   10:37--10:42
$("[data-action='update-cancel']").click(function(e){
  e.preventDefault();
  $(".update-jumbotron").hide();
})

//2:用户点击更新按钮
$("[data-action='update-ok']").click(function(e){
  e.preventDefault();
  // 2.1:获取lid/price
  var lid = $(".update-jumbotron .lid").html();
  var price =$(".update-jumbotron .input-price").val();
  // 2.2:发送ajax请求更新价格 10:57--11:00
  $.ajax({
    type:"POST",
    url:"data/08_product_update.php",
    data:{lid:lid,price:price},
    success:function(data){
      //console.log(data);
      if(data.code>0){
        alert(data.msg);
        $(".update-jumbotron").hide();
        loadProductByPage(1,8);
      }else{
        alert(data.msg);
      }
    },error:function(){
      alert("网络故障，请检查");
    }
  });
  // 2.3:获取返回数据
});


