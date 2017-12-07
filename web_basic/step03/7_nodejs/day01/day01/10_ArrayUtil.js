function sum(arr){
  var result = 0;
  for(var v of arr){
    result += v;
  }
  return result;
}
function avg(arr){
  return sum(arr)/arr.length;
}
module.exports = {
  sum:sum,
  avg:avg
};