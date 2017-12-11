$(function () {
    $.ajax({
        type:'GET',
        url:'data/07_role_list.php',
        success(data){
            var html = '';
            for(var i=0;i<data.length;i++){
                var item = data[i];
                html +=`
                        <tr>
                            <td>${item.rid}</td>
                            <td>${item.rname}</td>
                            <td>
                                <a href="${item.rid}" class="add">授权</a>
                            </td>
                        </tr>
                    `;
            }
            $("#tb1").html(html);
        },
        error(){
            alert('网络错误，请检查！');
        }
    });
    $("#tb1").on('click','.add',function (e) {
        e.preventDefault();
        let rid = $(this).attr('href');

    });
});