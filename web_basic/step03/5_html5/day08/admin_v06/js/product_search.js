/**
 * 搜索指定商品的内容
 * @param pno           搜索页码
 * @param pageSize      页大小
 * @param low           价格下限
 * @param high          价格上限
 * @param name          商品名
 */
function searchProductByPageNo(pno,pageSize,low,high,name) {
    $("#tbody1").html(`
        <div class="loading">
             <img src="img/loading.gif" alt="">
        </div>
    `);
    $.ajax({
        type:'GET',
        url:'data/09_product_search.php',
        data:{pno,pageSize,low,high,name},
        success(data){
            var pageCount = data.pageCount;
            var html = '';
            for(var item of data.data){

                html +=`
                <tr>
                    <td>
                       <div class="checkbox" style="margin: 0;">
                           <label>
                               <input type="checkbox">全选
                            </label>
                       </div>
                    </td>
                    <td>${item.lid}</td>
                    <td><img src="${item.pic}" alt=""></td>
                    <td>${item.fname}</td>
                    <td>${item.title}</td>
                    <td>${item.spec}</td>
                    <td>${item.price}</td>
                    <td>
                        <a href="${item.lid}" class="btn-del">删除</a>
                        <a href="${item.lid}" class="btn-update">更新</a>
                        <a href="${item.lid}" class="btn-detail">详情</a>
                    </td>
                </tr>
            `;
            }
            $("#tbody1").html(html);
            //拼接页码
            var html = '';
            data.pno = parseInt(data.pno);
            //上上一页
            if(data.pno-2>0)
                html +=`<li><a href="#" data-page="${data.pno-2}_${data.pageSize}_${data.low}_${data.high}_${data.name}">${data.pno-2}</a></li>`;
            //上一页
            if(data.pno-1>0)
                html +=`<li><a href="#" data-page="${data.pno-1}_${data.pageSize}_${data.low}_${data.high}_${data.name}">${data.pno-1}</a></li>`;
            //当前页
            html +=`
                <li class="active"><a href="#" data-page="${data.pno}_${data.pageSize}_${data.low}_${data.high}_${data.name}">${data.pno}</a></li>
            `;
            //下一页
            if(data.pno+1<=pageCount)
                html +=`<li><a href="#" data-page="${data.pno+1}_${data.pageSize}_${data.low}_${data.high}_${data.name}">${data.pno+1}</a></li>`;
            //下下一页
            if(data.pno+2<=pageCount)
                html +=`<li><a href="#" data-page="${data.pno+2}_${data.pageSize}_${data.low}_${data.high}_${data.name}">${data.pno+2}</a></li>`;
            $("#pagination").html(html);
        },
        error(){
            alert("网络错误，请检查!");
        }
    })
}
searchProductByPageNo(1,8,0,111000,'');
//product-high : 搜索关键词失去焦点事件
//方式1：用户输入 商品名称  下限  上线（回车）
// 1.获取上限输入input绑定事件 keyup

$("#product-high").keyup(function (e) {
    // 2.获取上限、下限、关键字
    var low = $("#product-low").val();
    var high = $(this).val();
    var name = $("#product-kw").val();
    // 3.如果当前用户输入enter
    if(e.keyCode == 13){
        // 4.调用 searchProductByPageNo()
        searchProductByPageNo(1,8,low,high,name);
    }

});



// 处理分页点击事件
// 1.获取所有分页按钮点击事件
// 2.pno,pageSize,low,high,name
// 3.searchProductByPageNo()
// 模块6：完成商品的搜索功能
// 1.创建一个函数分页搜索商品内容
// 2.创建一个函数 searchProductByPageNo
// 3.参数：pno  pageSize  low  high  name
// 4.发送ajax请求 data/09_product_search.php
// 5.参数
// 6.获取返回的数据
// 7.拼接当前页的内容
// 8.拼接页码：1 2 3 4 5
//如果网络比较繁忙，网页会出现一片空白的状态
//首先显示一个进度条
$("#pagination").on('click','a',function (e) {
    e.preventDefault();
    var page = $(e.target).data('page');
    page = page.split('_');
    var [pno,pageSize,low,high,name]=page;
    //console.log(pno,pageSize,low,high,name);
    searchProductByPageNo(pno,pageSize,low,high,name);
});