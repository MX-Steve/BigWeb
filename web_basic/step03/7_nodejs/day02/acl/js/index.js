$(()=>{
    $.ajax({
        type:'GET',
        url:'data/01_user_list.php',
        success(data){

            var html ='';
            for(var i=0;i<data.length;i++){
                var item = data[i];
                html +=`
                    <tr>
                        <td>${item.uid}</td>
                        <td>${item.uname}</td>
                        <td>
                            <a href="${item.uid}" class="btn-del">删除</a>    
                            <a href="${item.uid}" class="btn-update">更新</a>    
                            <a href="${item.uid}" class="btn-detail">详情</a>    
                            <a href="${item.uid}" class="btn-role">拥有角色</a>    
                        </td>
                    </tr>
                `;
            }
            $("#tbody1").html(html);
        },
        error(){alert("网络错误，请检查");}
    })
});

//模块二：获取所有当前用户已拥有角色列表
$("#tbody1").on('click','a.btn-role',function(e){
	e.preventDefault();
	var uid = $(this).attr('href');
	//1.发送ajax请求
	//2.data/04_role_list.php
	//3.uid
	$.ajax({
		url:"data/04_role_list.php",
		data:{uid:uid},
		success(data){
			//4.拼接字符串并创建元素
			//5..lists3中
			var html = '';
			for(var item of data){
				html +=`
					<li>${item.rname}</li>	
				`;
			}
			$(".list3").html(html);
		},
		error(){
			alert("网络故障，请检查");
		}
	});

	//发送ajax请求，请求05_role_list.php
	$.ajax({
		type:'get',
		url:'data/05_role_list.php',
		data:{uid:uid},
		success(data){
			var html = '';
			for(var i=0;i<data.length;i++){
				var item = data[i];
				html +=`<li>	
							<input type="radio" name="rname" 
							data-role="${uid}_${item.rid}" value="" />${item.rname}
						</li>
				`;
			}
			$(".list2").html(html);
		},
		error(){
            alert("网络故障，请检查");
		}
	})
	
});

