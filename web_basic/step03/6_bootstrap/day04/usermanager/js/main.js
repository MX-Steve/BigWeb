$(()=>{
    var uname = sessionStorage.getItem('uname');
    if(!uname){
        location.href = "login.html";
        return;
    }
    $.ajax({
        type:'get',
        url:'data/02_userlist.php',
        success(data){
            // console.log(data);
            var utype = data.utype;
            var data = data.data;
            var html = '';
            for(var i=0;i<data.length;i++){
                var item = data[i];
                html +=`
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.uname}</td>
                        <td>${item.utype==0?"管理员":"普通用户"}</td>`;
                if(utype == 0){
                    html +=`
                        <td>
                            <a href="${item.id}" class="btn-new">创建</a>
                            <a href="${item.id}" class="btn-del">删除</a>
                            <a href="${item.id}" class="btn-update">更新</a>
                            <a href="${item.id}" class="btn-detail">详情</a>
                        </td>
                    `;
                }else{
                    html +=`
                        <td>
                            <a href="${item.uid}">查看</a>
                        </td>
                    `;
                }
                html+='</tr>';
            }
            $("#tbody").html(html);
        },
        error(){
            alert("网络错误，请检查");
        }
    })
});