function loadProducts(pno=0){
	//向data/routes/products/getProductsByKw.php发送get请求,携带location中的search中的=后的字符串作为参数
		//响应结果: 遍历结果，动态拼接生成模板
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
				<a href="product-details.html?lid=${p.lid}">
					<img src="${p.md}" alt="">
				</a>
				<p>
					¥<span class="price">${p.price}</span>
					<a href="product-details.html?lid=${p.lid}">${p.title}</a>
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
		
		document.getElementById("show-list").innerHTML=html;
		var pageCount=output.pageCount;
		var pageNo=output.pageNo;
		var html=`<a href="javascript:;" class="previous disabled">上一页</a>`;
		for(var i=1;i<=pageCount;i++)
			html+=`<a href="javascript:;">${i}</a>`;
		html+=`<a href="javascript:;" class="next">下一页</a>`;
		var divPages=document.getElementById("pages");
		divPages.innerHTML=html;
		divPages.children[pageNo+1].className="current";

		checkAStatus(divPages,pageCount,pageNo);

		//为id为pages的div绑定单击事件
		divPages.onclick=e=>{
			//如果目标元素是a
			if(e.target.nodeName=="A"){
				//如果a不是divPages的首尾的子元素
				var a=e.target;
				if(a!==divPages.children[0]&&a!==divPages.lastElementChild){
					//如果当前a不是current的时候
					if(a.className!="current"){
						//获得当前a内容减1
						var pno=a.innerHTML-1;
						//调用loadPriducts(pno)
						loadProducts(pno);
					}//否则
				}else{
						//如果class中没有disabled
					if(!a.className.endsWith("disabled")){
						var curr=divPages.querySelector(".current");
						if(a.className.startsWith("next")){
							//重新加载商品列表传入current
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
	if(pageNo!=0&&pageNo!=pageCount-1){
		prev.className="previous";
		next.className="next";
	}else{
		if(pageNo==0)
			prev.className="previous disabled";
		if(pageNo==pageCount-1){
			next.className="next disabled";
			prev.className="previous";
		}
	}
}

function loadCart(){
	ajax({
		type:'get',
		url:'data/routes/cart/getCart.php'
	}).then(data=>{
		console.log(data);
		var html ='',total=0;
		for(var p of data){
			total +=p.price * p.count;
			html+=`
				<div class="item" data-iid=${p.iid}>
				  <span>${p.title}</span>
				  <div>
					<span class="reduce">-</span>
					<input type="text" value=${p.count}>
					<span class="add">+</span>
				  </div>
				  <p>
					<span>￥${(p.price * p.count).toFixed(2)}</span>	
				  </p>
				</div>	
			`;
		}
		console.log(html);
		document.querySelector("#cart>.cart_content").innerHTML = html;
		document.getElementById("total").innerHTML = total.toFixed(2);
	});
}

(()=>{
	loadProducts();
	loadCart();
	var ul=document.getElementById("show-list");
	ul.onclick=e=>{
		if(e.target.className=="add"||e.target.className=="reduce"){
			var input=e.target.parentNode.children[1];
			var n=parseInt(input.value);
			if(e.target.className=="add")
				input.value=n+1;
			else{
				if(n>1)
					input.value=n-1;
			}
		}else if(e.target.className=="addCart"){
			ajax({
				type:"get",
				url:"data/routes/users/isLogin.php"
			}).then(data=>{
				if(data.ok==0){
					var url=location.href;
					url=encodeURIComponent(url);
					location="login.html?back="+url;
				}else{
					var lid=e.target.parentNode.parentNode.children[0].href.split("=")[1];
					var count=e.target.parentNode.children[1].value;
					ajax({
						type:"get",
						url:"data/routes/cart/addToCart.php",
						data:"lid="+lid+"&count="+count,
						dataType:'text'
					}).then(()=>{
						e.target.parentNode.children[1].value=1;
						alert("添加成功");
						loadCart();
					});
				}
			})
		}
	}
	document.querySelector("#cart>.cart_content").onclick=e=>{
		if(e.target.className == "reduce" || e.target.className == "add"){
			var n = parseInt(e.target.parentNode.children[1].value);
			e.target.className == "add"? (n++):(n--);
			var iid =e.target.parentNode.parentNode.dataset.iid;
			ajax({
				type:'get',
				url:'data/routes/cart/updateCart.php',
				data:'iid='+iid+"&count = "+n,
				dataType:'text'
			}).then(loadCart)
		}
	}
})();