const express = require('express');
const wechat = require('wechat');
const mysql = require('mysql');
const https = require('https');


const config = {
    appid: 'wxd79170812ab02b3d',
    token: 'weixin',
    encodingAESKey: 'X3dq6DBq0TvJ8KvlDjuB1WqwulE1PDu8GztbACoKHbJ'
};

let pool = mysql.createPool({
    user: 'root'
});
let app = new express();
app.use(express.query());
app.use('/', wechat(config, (req, res, next) => {
    let weixin = req.weixin;
    let question = req.weixin.Content;
    console.log(question);

    if(question.includes("天气")){
        let city = question.replace("天气",'').trim();
        //console.log(city);
        const API = "https://free-api.heweather.com/s6/weather?key=1323a44c9bdb4c39a0d459a6818ab425&location="+encodeURI(city);
        let response = res;
        https.get(API,(req,res)=> {
            req.on('data',(data)=>{
                let weather = JSON.parse(data.toString()).HeWeather6[0];
                if(weather.status == 'ok'){
                    let answer = `
${city}当前天气：${weather.now.cond_txt},
温度：${weather.now.tmp} 摄氏度，
风向：${weather.now.wind_dir },
风速：${weather.now.wind_sc}
                    `;
                    response.reply(answer);
                }else{
                    //todo
                    response.reply(weather.status);
                }
            });
        });

    }else  if (weixin.Content === '你好') {
         res.reply('Hello!');
    }else if (weixin.Content.includes('你是谁')||weixin.Content.includes('你叫什么')) {
         res.reply([
            {
                title:'我是前端技术公众号',
                description:'HTML，CSS，Javascript 技术',
                picurl:'https://tse3-mm.cn.bing.net/th?id=OIP.VTL9qbfjtu8OnQxePYUDfAHaEo&p=0&o=5&pid=1.1',
                url:'https://github.com/thu'
            }
         ]);
    } else if (weixin.Content === '放首歌') {
        res.reply({
            type: 'music',
            content: {
                title: '我们不一样',
                description:'我们不一样.mp3',
                musicUrl:'http://mx-steve.top/project/mp3/wearedifferent.mp3',
                hqMusicUrl:'http://mx-steve.top/project/mp3/wearedifferent.mp3'
            }
        });
    } else if (weixin.Content === '换一首') {
        res.reply({
            type: 'music',
            content: {
                title: '后来',
                description: '后来.mp3',
                musicUrl: 'http://mx-steve.top/project/mp3/houlai.mp3',
                hqMusicUrl: 'http://mx-steve.top/project/mp3/houlai.mp3'
            }
        });
    } else if (weixin.Content === '你会什么'){
        res.reply("我会预备天气和放歌");
    } else{
        res.reply(`我还小，听不懂你说什么。你可以问我“地点 天气”，或者“放首歌”`);
    }

    // let sql = 'SELECT answer FROM db.message WHERE question LIKE ?'
    // pool.query(sql, [`%${question}%`], (err, results, fields) => {
    //     console.log(results);
    //     if (results.length === 0) {
    //         res.reply('听不懂。。。');
    //     } else {
    //         res.reply(results[0].answer);
    //     }
    // });



}));
app.listen(3000);