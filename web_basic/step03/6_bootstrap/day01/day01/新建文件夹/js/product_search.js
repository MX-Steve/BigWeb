
//模块六:完成商品搜索功能    9:25--9:35
//1:创建一个函数分页搜索商品内容
//2:创建一个函数 searchProductByPageNo
//3:参数 pno pageSize low high name

/**
 * 搜索指定商品内容
 * @param pno      页码
 * @param pageSize 页大小
 * @param low      价格下限
 * @param high     价格上限
 * @param name     商品名称
 */
function searchProductByPageNo(pno,pageSize,low,high,name){
  //3:如果网络繁忙，网页会出一片空白状态
  //首先显示进度条
  $("#tbody1").html(`
  <div class="loading">
    <img src="img/loading.gif" alt="">
  </div>   
  `);
  //4:发送ajax请求  data/09_product_search.php
 //5:参数
 $.ajax({
   type:"GET",
   url:"data/09_product_search.php",
   data:{pno:pno,pageSize:pageSize,low:low,high:high,name:name},
   success:function(data){
     console.log(data);
     //6:获取返回数据  9:50--9:53
     //7:拼接当前页内容
     var html = "";
     for(var item of data.data) {
       html += `
              <tr>
                <td>
                  <div class="checkbox" style="margin: 0;">
                    <label>
                      <input type="checkbox">
                    </label>
                  </div>
                </td>
                <td>${item.lid}</td>
                <td><img src="${item.pic}" /></td>
                <td>${item.fname}</td>
                <td>${item.title}</td>
                <td>${item.spec}</td>
                <td>${item.price}</td>
                <td>
<a href="${item.lid}" class="btn-del">删除</a>                
<a href="${item.lid}" class="btn-update">更新</a> 
<a href="${item.lid}" class="btn-detail">详细</a>                 
                </td>
              </tr>     
     `;
     }
     $("#tbody1").html(html);
     //8:拼接页码 [1][2][3][4][5]
     var html = "";
     data.pno = parseInt(data.pno);
     //上上一页
if(data.pno-2>0){
html += `
<li><a href="#"  data-page="${data.pno}_${data.pageSize}_${data.low}_${data.high}_${data.name}">${data.pno-2}</a></li>
`;
}
//上一页
if(data.pno-1>0){
  html += `
<li><a href="#"  data-page="${data.pno}_${data.pageSize}_${data.low}_${data.high}_${data.name}">${data.pno-1}</a></li>
`;
}
//当前页
html += `
<li class="active"><a href="#"  data-page="${data.pno}_${data.pageSize}_${data.low}_${data.high}_${data.name}">${data.pno}</a></li>
`;
//下一页  10:40--10:45
if(data.pno+1<=data.pageCount){
html += `
<li><a href="#"  data-page="${data.pno}_${data.pageSize}_${data.low}_${data.high}_${data.name}">${data.pno+1}</a></li>
`;
}
//下下一页

console.log(data.pno+":"+data.pageCount);
console.log(data.pno+2<=data.pageCount);
if(data.pno+2<=data.pageCount){
html += `
<li><a href="#" data-page="${data.pno}_${data.pageSize}_${data.low}_${data.high}_${data.name}">${data.pno+2}</a></li>
`;
}
$("#pagination").html(html);


},
   error:function(){
     alert("网络故障请检查");
   }
 });
}
searchProductByPageNo(1,8,0,2100000,"");

//处理分页点击事件
//1:获取所有分页按钮绑定点击事件
//2:pno pageSize low high name
//3:searchProductByPageNo(1,8,0,2100000,"");
$("#pagination").on("click","li a",function(e){
  e.preventDefault();
  var page = $(this).data("page");
  var arr = page.split("_");
  var pno = parseInt($(this).html());
  var pageSize = parseInt(arr[1]);
  var low = parseInt(arr[2]);
  var high = parseInt(arr[3]);
  var name = arr[4];
  searchProductByPageNo(pno,pageSize,low,high,name);
});


//方式一:用户输入 商品名称 下限 上限(回车)
//1:获取上限输入input绑定事件 keyup   11:40--11:45
$("#product-high").keyup(function(e){
 //2:获取上限 下限 关键字
  var name = $("#product-kw").val();
  var high = $(this).val();
  var low =  $("#product-low").val();
 //3:如果当前用户输入 enter
  if(e.keyCode==13) {
    //4:调用
    searchProductByPageNo(1,8,low,high,name);
  }
});









