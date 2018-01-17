var table_delete_object = null;//点击删除一行时 保存行对象
var manage_table_time = 300;
$(function(){
	tableEven();
	tableCheck();
	init_del_win();
	check_table_data();
	//关闭详细信息窗口  
    $('#close_table_win').click(function(){
        $('.table_win').hide(manage_table_time);
    });

    //新建窗口  
    $('.equip_add').click(function() {
        $('.table_win').show(manage_table_time);
    });

    $('.equip_list').click(function(){
        $('.table_win').show(manage_table_time);
    });
});


//初始化窗口高度
    function init_table_window(){
        var win = $('.table_win');
        if(null == win) return;
        var h = win.outerHeight() - top_window;
        win.css('margin-top', - (h/2) +'px');
    }

    function test_table_data(){
        var table = $('.table_box').find('table');
        var tr = table.find('tr').eq(1).html();
        var tr_text = "<tr>" + tr + "</tr>";
        var sum_text = "";
        for(var i = 0;i <30;i++){
            sum_text += tr_text;
        }
        table.append(sum_text);
    }
/**
 * 打开删除
 */
function init_del_win(){
        //打开删除窗口
        $('.equip_delete').click(function() {
            var _this = $(this);
           table_delete_object =  _this.parents('tr');
            $('.judge_win').show(manage_table_time);
        });
        
        //关闭删除窗口
        $('.close_judge_win').click(function(event) {
            $('.judge_win').hide(manage_table_time);
        });

       //删除窗口 确定按钮
        $('.sure_delete_judge_win').click(function(){
            table_delete_object.remove();
            $('.judge_win').hide(manage_table_time);
            check_table_data();
        }); 
    }
//查找是否有信息
    function check_table_data(){
        var table = $('.equip_table').find('table');
        var tr_len = table.find('tr').length;
        var th_len = table.find('th').length;
        var tr = "<tr><td  colspan='"+th_len+"'>未找到相关信息</td></tr>";
        if(1 == tr_len){
            table.append(tr);
        }
    }
/**
 * table换颜色
 */
function tableEven(){
	$("#table_box tr:even").find("td").each(function(){
		var that = this;
		$(that).css("background","#E5EFF8");
	});
}
/**
 * 全选或全部不选
 */
function tableCheck(){
	$("#checkTable").click(function(){
		var str = $(this).prop("checked");
		if(str){
			$(this).attr("checked","checked");
			$(".table_box tr").find("td").each(function(){
				$(this).find("input[type = 'checkbox']").prop("checked",true);
			});
		}else {
			$(this).removeAttr("checked");
			$(".table_box tr").find("td").each(function(){
				$(this).find("input[type = 'checkbox']").removeAttr("checked");
			});
		}
	});
}
















