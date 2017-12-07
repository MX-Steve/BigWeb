
var str = "";
for(var i=1;i<=9;i++){
  for(var j=1;j<=i;j++){
    //ES6 新特性，在Node.JS中不存在兼容性问题
    str += `${i}*${j}=${i*j} `;
  }
  str += "\r\n";
}
console.log(str);