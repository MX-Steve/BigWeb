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
                                <a href="${item.rid}" data-rname="${item.rname}" class="btn-acl">授权</a>
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
    $("#tb1").on('click','.btn-acl',function (e) {

        e.preventDefault();
        let rid = $(this).attr('href');
        let rname = $(this).data('rname');
        $(".role_name").html(rname);//绑定到授权列表
        $.ajax({
            url:'data/08_module_list.php',
            type:'GET',
            success(data){
                var html = '';
                for(var item of data){

                    html +=`
                        <tr>
                            <td>${item.mname}</td>
                            <td>
                                <input data-acl="${item.mid}_${rid}_C" type="checkbox">C
                                <input data-acl="${item.mid}_${rid}_R" type="checkbox">R
                                <input data-acl="${item.mid}_${rid}_U" type="checkbox">U
                                <input data-acl="${item.mid}_${rid}_D" type="checkbox">D
                            </td>
                        </tr>
                    `;
                }
                $("#module_list").html(html);
                $(".acl").show();
            },
            error(){alert('网络故障，请检查')}
        })

    });

    $("#module_list").on('click',"[data-acl]",function (e) {
        // e.preventDefault();
        var acl = $(this).data('acl').split("_");
        var mid = acl[0];
        var rid = acl[1];
        var opt = acl[2];
        var status = $(this).prop("checked")?"1":"0";
        console.log(mid,rid,opt,status);
    });
});

