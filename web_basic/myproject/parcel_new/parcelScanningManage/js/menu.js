$(function(){
	/**
	 * 点击选择管理
	 */
	$("#menu p").click(function(){
		var num = $(this).next("ul").attr("cur");
		var dis = $(this).next("ul").css("display");
		var val = "> "+$(this).text()+" ";
		if(dis == "block"){
			$(this).next("ul").css("display","none");
		}else{
			$("#menu ul").each(function(){
				if($(this).attr("cur") == num){
					$(this).css("display","block");
					$("#menu_two").text(val);
				}else{
					$(this).css("display","none");
				}
			});
		}
	});
	/**
	 * 选择模块系统
	 */
	$("#menu ul li").click(function(){
		var that = $(this);
		var text = that.text();
		var val = "> "+text;
		$("#menu ul li").each(function(){
			var _that = $(this);
			if(_that.text() == text){
				_that.css("background-color","#fff");
				_that.css("border-left","5px solid #3470d1");
				$("#menu_last").text(val);
			}else{
				_that.css("background-color","");
				_that.css("border-left","0px");
			}
		});
		var url = that.find("a").attr('to_url');
		$('#main_iframe').attr('src', url);
	});
});