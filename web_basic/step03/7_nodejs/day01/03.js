var userCount  = 998;
var userLogin = function () {
    console.log("正在执行登录操作");
}
console.log(__filename);
console.log(__dirname);
exports.userLogin = userLogin;
exports.userCount = userCount;
var bike = function () {
    console.log("凤凰自行车");
}
module.exports.bike=bike;//==>更保险