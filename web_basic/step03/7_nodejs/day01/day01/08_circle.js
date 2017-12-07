const PI = 3.14;
function getSize(r){
  return PI*r*r;
}
function getPerimter(r){
   return PI*r*2;
}

//导出方式一:
//exports.size = getSize;
//exports.perimiter = getPerimter;
//导出方式二:
//module.exports.size = getSize;
//module.exports.perimiter = getPerimter;
//导出方式三:
module.exports = {
   size:getSize,
   perimiter:getPerimter
};





