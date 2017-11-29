/**
 * num:计算的数字
 * return : true/false
 */
function isPrime(n) {
    var start = new Date().getTime();
    do{
        var end = new Date().getTime();
    }while(end-start<=5000);
    if(n<=2){
        return true;
    }
    for(var i=2;i<=n;i++){
        if(n%i ==0){
            break;
        }
    }
    // if(i==n){
    //     return true;
    // }else{
    //     return false;
    // }

    return i==n;
}
console.time('t1');
var result = isPrime(12111111123);
console.timeEnd('t1');
postMessage(result);

