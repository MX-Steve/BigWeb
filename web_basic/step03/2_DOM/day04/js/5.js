var offsetX,offsetY,canMove=false;
pop.onmousedown=e=>{//启动拖拽
	canMove=true;
	offsetX=e.offsetX; offsetY=e.offsetY;
}
//移动过程中
window.onmousemove=e=>{
	if(canMove){
		var top=e.clientY-offsetY;
		var left=e.clientX-offsetX;
		pop.style.cssText=
			"top:"+top+"px;left:"+left+"px";
	}
}
//停止拖拽
pop.onmouseup=()=>canMove=false;
//移出窗口时，关闭开关
window.onmouseout=()=>canMove=false;