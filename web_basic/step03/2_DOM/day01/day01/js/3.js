(()=>{
	//固定套路:
	//0. 构建DOM树
	//1. 查找触发事件的元素
	//2. 绑定事件
	//3. 事件处理函数中: 查找要修改的元素
	//4. 修改元素
	/*数量变化*/
	//1. 查找id为data的table
	var table=document.getElementById("data");
	//2. 在table下查找所有button
	var btns=table.getElementsByTagName("button");
	//3. 遍历btns,为每个按钮绑定单击事件
	//for(var i=0,len=btns.length;i<len;i++){
	for(var btn of btns){
		btn.onclick=e=>{
			var btn=e.target;//获得当前按钮btn
			//从当前按钮向上找父元素，再向下找1位置的子元素
			var span=btn.parentNode.children[1];
			//console.log(span);//打桩调试
			//获得span的内容,转为整数，保存在i
			var i=parseInt(span.innerHTML);
			//如果当前按钮的内容是+, 就i+1
			if(btn.innerHTML=="+") i++;
			else if(i>1) i--;//否则，如果i>1，才能i-1
			//将i再保存回span的内容中
			span.innerHTML=i;

			/*小计变化*/
			//查找当前按钮的父元素的前一个兄弟的内容,选取¥之后的剩余字符，转为浮点数，保存在price
			var price=parseFloat(
				btn.parentNode
					 .previousElementSibling
					 .innerHTML
					 .slice(1)
			);
			//计算小计subTotal=price*i
			var subTotal=price*i;
			//将subTotal按两位小数四舍五入，再在开头补¥，保存到当前按钮btn的父元素的下一个兄弟的内容中
			btn.parentNode
				 .nextElementSibling
				 .innerHTML="¥"+subTotal.toFixed(2);

			/*总计*/
			//在table中找tbody下每行最后一个td
			var tds=table.querySelectorAll(
				"tbody td:last-child"	
			);
			var sum=0;
			//遍历tds中每个td,并累加其内容
			//for(var i=0;i<tds.length;i++){
			for(var td of tds){
				sum+=parseFloat(td.innerHTML.slice(1))
			}
			//设置tfoot中最后一个td的内容为sum
			table.querySelector("tfoot td:last-child")
					 .innerHTML="¥"+sum.toFixed(2);
		}
	}
})();