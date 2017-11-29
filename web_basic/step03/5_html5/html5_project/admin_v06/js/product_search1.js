// 模块6 搜索功能
// 模块6 创建一个函数分页搜索商品内容
// 创建一个函数_searchProductBypageNo
// 参数_pno _pagesize low _haigh _name
// 发送ajax请求
// 注意参数发送的时候的参数 获取返回时候的数据
//如果网页繁忙,网页会出现一盘空白
//首先显示进度条
    function searchProducutByPageNo(pno,pageSize,low,height,name){
            var self = this;
            this.pno = pno;
            this.low = low;
            this.height = height;
            this.name = name;
            this.pageSize=pageSize;
           // this.search();
            this.span= $("#pagination");
            this.s();
    }
 /*
searchProducutByPageNo.prototype={
    constructor:searchProducutByPageNo,
        s(){
           this.span.on("click","li a",e=>{
               e.preventDefault();
               var str = $(e.target).data("page");
              var arr = str.split("_");
               console.log(this);
			   var that = this;
               console.log(typeof that);
//               searchProducutByPageNo(arr[0])
//				var a = new that();
//				a(arr[0]);
				
           })

}}
*/
searchProducutByPageNo.prototype.s = function () {
    this.span.on("click","li a",e=>{
        e.preventDefault();
        var str = $(e.target).data("page");
        var arr = str.split("_");
        console.log(str);
        //searchProducutByPageNo(arr[0])
        return arr;
    })
}
    searchProducutByPageNo.prototype.search=function() {
        var that = this;
            $("#tbody1").html( `         <div class="loading">
            <img src="img/loading.gif" alt="">
            </div>`);
            setTimeout(()=>{

                $.ajax({
                    type: "get",
                    url: "data/09_product_search.php",
                    data: {pno: this.pno, pageSize: this.pageSize, name: this.name, high: this.height, low: this.low},
                    success(output){
                        console.log(output);
                        var data = output.data;
                        console.log(data);
                        var html = "";
                        for(var p of data){
                            html +=`
                                  <tr>
                                    <td>
                                      <div class="checkbox" style="margin: 0;">
                                        <label>
                                          <input type="checkbox">全选
                                        </label>
                                      </div>
                                    </td>
                                    <td>${p.lid}</td>
                                    <td><img src="${p.sm}" alt=""></td>
                                    <td>${p.fname}</td>
                                    <td>${p.title}</td>
                                    <td>${p.spec}</td>
                                    <td>${p.price}</td>
                                    <td>`
                            if(p.expire==0){
                                html+=`  <a href="${p.lid}">删除</a>
                                        <a href="{p.lid}">更新</a>
                                        <a href="{p.lid}">详细</a>`}
                            html+=      ` </td>
                                  </tr>                        
                        `
                        }
                        $("#tbody1").html(html);
						console.log(1111);
                        console.log(that);

                        var pp = that.pno;
                        var pc = output.countPage;
                        html = "";
                        // 上上页
                        if(pp-2>0) html += `<li><a href="#" data-page="${parseInt(output.pno)-2}_${output.pageSize}_${output.low}_${output.height}_${output.name}">${pp-2}></a></li>`

                        //上一页
                        if(pp-1>0) html += `<li><a href="#" data-page="${parseInt(output.pno)-1}_${output.pageSize}_${output.low}_${output.height}_${output.name}">${pp-1}</a></li>`
                        //当前页
                        html += `<li><a href="#" data-page="${output.pno}_${parseInt(output.pageSize)}_${output.low}_${output.height}_${output.name}">${pp}</a></li>`
                        //下一页
                        if(pp+1<pc) html += `<li><a href="#" data-page="${parseInt(output.pno)+1}_${output.pageSize}_${output.low}_${output.height}_${output.name}">${pp+1}</a></li>`

                        //下下页
                        if(pp+2<pc) html += `<li><a href="#" data-page="${parseInt(output.pno)+2}_${output.pageSize}_${output.low}_${output.height}_${output.name}">${pp+2}</a></li>`

                        $("#pagination").html(html);
                        console.log(that.pno)
                    },
                    error(){
                        alert("网络故障")
                    }
                })
            },1000)


    }

   // let a = new searchProducutByPageNo(1,2,6000,8000,"");
let b = new searchProducutByPageNo(1,2,6000,8000,"");
	b.search();
    b.s();
//console.log(b);
//consoel.log(searchProducutByPageNo);



//   a.search();
   // console.log(a);
//