$("#btn").click(e=>{
	e.preventDefault();
	var uname = $("#uname").val();
	var upwd = $("#upwd").val();
	$.ajax({
		type:"POST",
		url:"data/01_login.php",
		data:{uname,upwd},
		success(data){
			if(data.code > 0){
				alert(data.msg);
                sessionStorage.setItem('uname',uname);//登录成功后，保存用户名到sessionStorage里
                location.href = "main.html";
			}
		},
		error(){
			alert("网络错误，请检查!");
		}
	});
});