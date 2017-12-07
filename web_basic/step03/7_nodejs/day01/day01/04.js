
var path = "/index";

function fnIndex(){console.log("index")}
function fnSearch(){console.log("search")}
function fnLogin(){console.log("login")}

if(path=="/index"){
  fnIndex();
}else if(path=="/search"){
  fnSearch();
}else if(path=="/login"){
  fnSearch();
}else{
  console.log("向客户端输出404");
}
switch(path){
  case "/index":fnIndex();break;
  case "/search":fnSearch();break;
  case "/login":fnLogin();break;
  default:console.log("向客户端输出404")
}
