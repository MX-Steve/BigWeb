
/*

//存取页面大小
var pageSize = localStorage['pageSize'];
if(!pageSize){
  pageSize = 10;
}
$('#page-size').val(pageSize).change(function(){
  localStorage['pageSize'] = $(this).val();
  loadProductByPage(1, $(this).val());
});

//分页条单击事件处理
$('#pagination').on('click', 'li a', function(e){
  e.preventDefault();
  loadProductByPage($(this).attr('href'), localStorage['pageSize']);
})

//分页加载数据
function loadProductByPage(pno, pageSize){
  $('#table-laptop tbody').html('<div class="loading"><img src="img/loading.gif" alt=""></div>');
  $.ajax({
    url: 'data/04_product_list.php',
    data: {pno:pno, pageSize: pageSize},
    success: function(pager){
      //表格内容
      var html = '';
      $.each(pager.data, function(i, l){
        html += `
          <tr>
            <td><input type="checkbox"></td>
            <td>${l.lid}</td>
            <td><img class="pic" src="${'../'+l.pic}"></td>
            <td><p class="fname" title="${l.fname}">${l.fname}</p></td>
            <td><p class="title" title="${l.title}">${l.title}</p></td>
            <td><p class="spec" title="${l.spec}">${l.spec}</p></td>
            <td>￥${l.price}</td>
            <td>
              <a href="product_details.html">详情</a>
              <a href="product_update.html">修改</a>
              <a href="product_delete.html">删除</a>
            </td>
          </tr>
        `;
      })
      $('#table-laptop tbody').html(html);

      //分页条
      var html = '';
      html += `<li class="${pager.pno<=1?'disabled':''}"><a href="${pager.pno>1?pager.pno-1:'#'}">上一页</a></li>`;
      if(pager.pno-2>0){
        html += `<li><a href="${pager.pno-2}">${pager.pno-2}</a></li>`;
      }
      if(pager.pno-1>0){
        html += `<li><a href="${pager.pno-1}">${pager.pno-1}</a></li>`;
      }
      html += `<li class="active"><a href="${pager.pno}">${pager.pno}</a></li>`;
      if(pager.pno+1<=pager.pageCount){
        html += `<li><a href="${pager.pno+1}">${pager.pno+1}</a></li>`;
      }
      if(pager.pno+2<=pager.pageCount){
        html += `<li><a href="${pager.pno+2}">${pager.pno+2}</a></li>`;
      }
      html += `<li class="${pager.pno>=pager.pageCount?'disabled':''}"><a href="${pager.pno<pager.pageCount?pager.pno+1:'#'}">下一页</a></li>`;
      $('#pagination').html(html);
    }
  })
}
loadProductByPage(1, 10)
 */

//模块二：分页显示产品列表
//1.创建一个函数：
/**
 *
 * @param pno 页码：实例：123
 * @param pageSize 当前页记录数
 */
function loadProductByPage(pno,pageSize){
    //2.获取返回结果的数据
    $.ajax({
        type:'get',
        url:"data/04_product_list.php",
        data:{pno:pno,pageSize:pageSize},
        success:function (data) {
            //console.log(data);
            //3.动态创建表格中多行： id="tbody1"
            var html = '';
            var list = data.data;
            for(var i=0;i<list.length;i++){
                //4如果当前元素已失效，不创建，删除更新详细信息的按钮
                var item = list[i];
                html +=`
                  <tr>
                      <td>
                          <input type="checkbox">
                      </td>
                      <td>
                          ${item.lid}
                      </td>
                      <td>
                          图片
                      </td>
                      <td>
                          型号
                      </td>
                      <td>${item.title}</td>
                      <td>${item.spec}</td>
                      <td>${item.price}</td>
                      
                      <td>
                        ${item.expire =='0'?`<a href="${item.lid}" class="btn-del">删除</a>
                            <a href="${item.lid}" class="btn-update">更新</a>
                            <a href="${item.lid}" class="btn-detail">详细信息</a>`:''}
                            
                      </td>
                  </tr>
                `;
                $("#tbody1").html(html);
            }
            var html = '';
            if(data.pno!=1)
              html +=`<li><a href="${data.pno-1}">上一页</a></li>`;
            else
              html +=`<li><a style="color:#ddd;" href="${data.pno-1}">上一页</a></li>`;
            // 上上一页
            if(data.pno-2>0){
                html +=`<li><a href="#">${data.pno-2}</a></li>`;
            }
            // 上一页
            if(data.pno-1>0){
                html +=`<li><a href="#">${data.pno-1}</a></li>`;
            }
            // 当前页
            html +=`<li class="active"><a href="#">${data.pno}</a></li>`;
            // 下一页
            if(data.pno+1<=data.pageCount)
              html +=`<li><a href="#">${data.pno+1}</a></li>`;
            // 下下一页
            if(data.pno+2<=data.pageCount)
                html +=`<li><a href="#">${data.pno+2}</a></li>`;
            if(data.pno!=data.pageCount)
                html +=`<li><a href="${data.pno+1}">下一页</a></li>`;
            else
                html +=`<li><a style="color:#ddd;" href="${data.pno+1}">下一页</a></li>`;
            $('#pagination').html(html);
        },
        error:function(){
          //1.404,2.不是jison，3.语法错误
          alert('网络故障请检查');
        }
    });


    //5动态创建分页条1,2,3,4,5 ，最多5页
    //1.发送ajax请求，获取当前页的数据内容
}
// 6默认调用第一页
loadProductByPage(1,8);
// 7为分页条中每个页码添加事件
$('#pagination').on('click','a',function (e) {
    e.preventDefault();//a.submit:都要阻止事件的默认行为
    var pno = $(this).html();
    if(pno !='上一页' && pno != '下一页'){
        loadProductByPage(pno,8);
    }
});
// 8不同页码调用 loadProductByPage();























