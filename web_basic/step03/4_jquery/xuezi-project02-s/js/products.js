function loadProducts(pno=0){
	//向data/routes/products/getProductsByKw.php发送get请求,携带location中的search中的=后的字符串作为参数
	ajax({
		type:"get",
		url:"data/routes/products/getProductsByKw.php",
		data:location.search.slice(1)+"&pno="+pno
	})
	.then(output=>{
		//响应结果: 遍历结果，动态拼接生成模板
		var data=output.data;
		var html="";
		for(var p of data){
			html +=`
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
			`;
		}
		document.getElementById("show-list").innerHTML=html;

		var pageCount=output.pageCount,pageNo=output.pageNo;
		var html=`<a href="javascript:;" class="previous">上一页</a>`;
		for(var i=1;i<=pageCount;i++){
			html +=`<a href="javascript:;">${i}</a>`;
		}
		html+=`<a href="javascript:;" class="next">下一页</a>`;
		var divPages = document.getElementById("pages");
			divPages.innerHTML=html;
			divPages.children[pageNo+1].className="current";
		
		checkAStatus(divPages,pageCount,pageNo);

		divPages.onclick=e=>{			
			if(e.target.nodeName=="A"){
				var a=e.target;
				if(a!==divPages.children[0]&&a!==divPages.lastElementChild){
					if(a.className!="current"){
						var pno=a.innerHTML-1;
						loadProducts(pno);
					}
				}else{
					if(!a.className.endsWith("disable")){
						var curr = divPages.querySelector(".current");
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
	var prev = divPages.children[0];
	var next = divPages.lastElementChild;
	if(pageNo!=0&&pageNo!=pageCount-1){
		prev.className="previous";
		next.className="next";
	}else{
		if(pageNo==0){
			prev.className="previous disabled";
		}
		if(pageNo==pageCount-1){
			next.className="next disabled";
		}
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

	document.getElementById("show-list").onclick=e=>{
		if(e.target.className=="reduce"||e.target.className=="add"){			
			var input = e.target.parentNode.children[1];
			var n = parseInt(input.value);
			if(e.target.className=="add"){
				n++;
			}else if(n>1){
				n--;
			}
			input.value = n;
		}else if(e.target.className == "addCart"){
			ajax({
				type:"get",
				url:"data/routes/users/isLogin.php"
			}).then(data=>{
				if(data.ok==0){
					var url = location.href;
					url = encodeURIComponent(url);
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
						e.target.parentNode.children[1].value=1
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

	document.querySelector("#cart>.title>a").onclick=e=>{
		ajax({
			type:"get",
			url:"data/routes/cart/clearCart.php",
			dataType:"text"
		})
		.then(()=>{
			document.querySelector("#cart>.cart_content").innerHTML="";
			document.getEelementById("total").innerHTML="0.00";
		})
	}
})();