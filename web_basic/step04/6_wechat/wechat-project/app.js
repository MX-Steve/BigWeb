const express = require("express");
const wechat = require("wechat");
const mysql = require("mysql");

pool = mysql.createPool({user:"root"});
const config = {
    token:"weixin",
    appid:"wxd79170812ab02b3d",
    encodingAESKey:"iqQwxnoSN8HbsR1D3VmAQcrSftZFkDBN0CqiRxjGdyh"
};
let app = new express();

app.use(express.query());

app.use('/',wechat(config,(req,res,next)=>{
    let weixin = req.weixin;
    console.log(weixin);

    if(weixin.Content=='你好'){
        res.reply("hello");
    }else if(weixin.Content=="你是谁？"){
        res.reply([
            {
                title:"我是前端技术公众号",
                description:"HTML/CSS/JAVASCRIPT...",
                picurl:"http://www.baidu.com/img/bd_logo1.png",
                url:"http://github.com/mx-steve"
            }
        ]);
    }else if(weixin.Content == "放一首歌"){
        //http://php-download.sourceforge.net：音乐资源
        res.reply({
            type:"music",
            content:{
                title:"123木头人",
                description:"123木头人",
                musicUrl:"http://php-download.sourceforge.net/mp3/kugou/God%20is%20a%20girl.mp3"
            }
        });
    }
}));

/*supervisor:服务器自动重启*/
app.listen(3000);


