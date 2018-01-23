/*
*本插件为 -李韩- 封装,实现页面基础功能
**/
if(typeof jQuery !="function")
	throw new Error("本插件依赖于jQuery,使用之前必须先引入jQuery文件");
else{
	/*
	*功能1:下拉列表功能
	***dropdown***
	**/
  $("[data-trigger=dropdown]").parent().hover(
    function(){
      //this->父元素div->DOM
      var $parent=$(this);
      $parent.children("[data-trigger=dropdown]+*")
        .toggleClass("in")
    } 
  );

  /***accordion***/
  $("[data-trigger=accordion]").parent()
    .on("click","[data-trigger=accordion]",e=>
      $(e.target)
        .next().toggleClass("in")
        .siblings("[data-trigger=accordion]+*")
          .removeClass("in")
  );


  /***tabs***/
  $(".tabs:has([data-toggle=tab])")
    .on("click","[data-toggle=tab]",e=>{
      var $tar=$(e.target);
      if(!$tar.parent().is(".active")){
        $tar.parent().addClass("active")
          .siblings().removeClass("active");
        var id=$tar.attr("href");
        $(id).addClass("active")
          .siblings().removeClass("active");
      }
  })
}