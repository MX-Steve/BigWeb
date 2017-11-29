function loadProducts(pno=0){
	ajax({
		type:"get",
		url:"data/routes/products/getProductsByKw.php",
		data:location.search.slice(1)+"&pno="+pno
	}).then(output=>{
		var data=output.data;
		var html="";
		for(var p of data){
			html+=`
				<li>
					<a href="product_details.html?lid=${p.lid}">
						<img src="${p.md}" alt="">
					</a>
					<p>
						¥<span class="price">${p.price}</span>
						<a href="product_details.html?lid=${p.lid}">${p.title}</a>
					</p>
					<div>
						<span class="reduce">-</span>
						<input type="text" value="1">
						<span class="add">+</span>
						<a href="javascript:;" class="addCart">加入购物车</a>
					</div>
				</li>	
			`
		}
		document.getElementById("show-list")
						.innerHTML=html;
		//错误:.... json ....
		//开network->xhr请求->response

		var pageCount=output.pageCount,
			  pageNo=output.pageNo;
		var html=`<a href="javascript:;" class="previous">上一页</a>`;
		for(var i=1;i<=pageCount;i++){
			html+=`<a href="javascript:;">${i}</a>`;
		}
		html+=`<a href="javascript:;" class="next">下一页</a>`;
		var divPages=document.getElementById("pages");
		divPages.innerHTML=html;
		divPages.children[pageNo+1]
						.className="current";

		checkAStatus(divPages,pageCount,pageNo);

		divPages.onclick=e=>{//为divPages绑定单击事件
			if(e.target.nodeName=="A"){//如果目标元素是a
				var a=e.target;
				//如果a不是divPages的第一个子元素和最后一个子元素
				if(a!=divPages.children[0]&&
						a!=divPages.lastElementChild){
					//如果当前a的class不是current
					if(a.className!="current"){
						//获得当前a的内容-1，保存在pno中
						var pno=a.innerHTML-1;
						//调用loadProducts(pno)重新加载第pno页
						loadProducts(pno);
					}
				}else{
					//如果class不以disabled结尾
					if(!a.className.endsWith("disabled")){
						//在divPages下查找class为current的a
						var curr=
							divPages.querySelector(".current");
						//如果class以next开头
						if(a.className.startsWith("next")){
							//重新加载商品列表传入current的内容作为pno
							loadProducts(curr.innerHTML);
						}else{
							loadProducts(curr.innerHTML-2);
						}
					}
				}
			}
		}
					
	})
}
function checkAStatus(divPages,pageCount,pageNo){
	//获得divPages下两个a
	var prev=divPages.children[0];
	var next=divPages.lastElementChild;
	//如果pageNo不是0，也不是pageCount
	if(pageNo!=0&&pageNo!=pageCount-1){
		//两个按钮都启用
		prev.className="previous";
		next.className="next";
	}else{//否则
		if(pageNo==0)//如果pageNo==0,就prev禁用
			prev.className="previous disabled";
		//如果pageNo==pageCount-1,就next禁用
		if(pageNo==pageCount-1)
			next.className="next disabled";
	}
}
function loadCart(){
	ajax({
		type:"get",url:"data/routes/cart/getCart.php"
	}).then(data=>{
		var html="",total=0;
		for(var p of data){
			total+=p.price*p.count;
			html+=`
				<div class="item" data-iid="${p.iid}">
					<span>${p.title}</span>
					<div>
						<span class="reduce">-</span>
						<input type="text" value="${p.count}">
						<span class="add">+</span>
					</div>
					<p><span>¥${(p.price*p.count).toFixed(2)}</span></p>
				</div>`
		}
		document.querySelector("#cart>.cart_content")
						.innerHTML=html;
		document.getElementById("total")
						.innerHTML=total.toFixed(2);
	})
}
(()=>{
	loadProducts();
	loadCart();
	//为id为show-list的ul绑定单击事件
	document.getElementById("show-list")
		.onclick=e=>{
		//如果目标元素的className为reduce或add
		if(e.target.className=="reduce"
				||e.target.className=="add"){
			//找到目标元素旁边的input
			var input=e.target.parentNode.children[1];
			//获得input的值转为整数n
			var n=parseInt(input.value);
			//如果目标元素的className为add
			if(e.target.className=="add")
				n++;//将n+1
			else if(n>1)//否则,如果n>1
				n--;//将n-1
			input.value=n;//将n保存回input的值中
		}else if(e.target.className=="addCart"){
			ajax({
				type:"get",
				url:"data/routes/users/isLogin.php"
			}).then(data=>{
				if(data.ok==0){
					var url=location.href;
					//将back参数值中的: /等保留字转为单字节
					url=encodeURIComponent(url);
					location="login.html?back="+url;
				}else{
					var lid=e.target.parentNode.parentNode
									.children[0].href.split("=")[1];
					var count=
						e.target.parentNode.children[1].value;
					ajax({
						type:"get",
						url:"data/routes/cart/addToCart.php",
						data:"lid="+lid+"&count="+count,
						dataType:"text"
					}).then(()=>{
						e.target.parentNode.children[1]
										.value=1
						alert("添加成功");
						loadCart();
					})
				}
			})
		}
	}
	document.querySelector("#cart>.cart_content")
		.onclick=e=>{
		if(e.target.className=="reduce"
				||e.target.className=="add"){
			var n=parseInt(
				e.target.parentNode.children[1].value
			);
			e.target.className=="add"?(n++):(n--);
			var iid=
			 e.target.parentNode.parentNode.dataset.iid;
			ajax({
				type:"get",
				url:"data/routes/cart/updateCart.php",
				data:"iid="+iid+"&count="+n,
				dataType:"text"
			}).then(loadCart);
		}
	}
	document.querySelector("#cart>.title>a")
		.onclick=e=>{
		e.preventDefault();
		ajax({
			type:"get",
			url:"data/routes/cart/clearCart.php",
			dataType:"text"
		}).then(()=>{
			document.querySelector(
				"#cart>.cart_content"
			).innerHTML="";
			document.getElementById("total")
						.innerHTML="0.00";
		})
	}
})();