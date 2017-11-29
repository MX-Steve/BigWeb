(()=>{
	if(location.search!=""){
		ajax({
			type:"get",
			url:"data/routes/products/getProductById.php",
			data:location.search.slice(1)
		})
		.then(data=>{
			var p = data.product;
			var family = data.family;
			var imgs = data.imgs;

			var div = document.querySelector("#show-details");

			var title = div.querySelector("h1");
			var subtitle = div.querySelector("h3>a");
			var price = div.querySelector(".price>.stu-price>span");
			var promise = div.querySelector(".price>.promise>b");
			title.innerHTML = p.title;
			subtitle.innerHTML = p.subtitle;
			price.innerHTML = "¥"+ p.price;
			promise.innerHTML = p.promise;

			var spec = div.querySelector(".spec>div");
			var html = "";
			for(var laptop of family){
				html += `
					<a href="product-details.html?lid=${laptop.lid}"  class="${p.lid===laptop.lid?"active":""}">
						${laptop.spec}
					</a>	
				`;
			}
			spec.innerHTML = html;

//			div.querySelector(".account").onclick=e=>{
//				var btns = e.target.className;
//				if(btns==)
//			}
		})
	}
})();