ajax({
		type:"get",
		url:"footer.html",
		dataType:"html"
	})
	//然后，将获得的html片段，设置为header的内容
	.then(html=>{
		var footer=document.getElementById("footer");
		footer.innerHTML=html;

});