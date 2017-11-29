onmessage = function (e) {
    var num = e.data;
    for(var i=0,sum=0;i<=num;i++){
        sum +=i;
    }
    postMessage(sum);
}