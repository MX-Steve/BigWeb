var scoreList = [10,20,199,100,22];

for(var i=0;i<scoreList.length;i++){
  console.log(i+"=>"+scoreList[i]);
}
console.log("============");
//ES5新特性
for(var i in scoreList){
  console.log(i+"=>"+scoreList[i]);
}
console.log("============");
//ES6新特性
for(var item of scoreList){
  console.log(item);
}
