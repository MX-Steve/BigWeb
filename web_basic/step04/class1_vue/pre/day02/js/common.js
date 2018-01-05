function getXhr(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else{
        return new ActiveXObject("Microsoft.XMLHttp");
    }
}
function $(id){
	return document.getElementById(id);
}