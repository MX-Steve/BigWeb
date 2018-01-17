/*Node http模块 + Express模块创建的应用服务器——mfresh项目的数据服务器*/
const http = require('http');
const express = require('express');

let app = express();
let server = http.createServer(app);
server.listen(3000);

/**路由定义**/
//GET /newslist?pno=2
app.get('/newslist', function(req, res){
    let pno = req.query.pno || '1';
    //TODO: 根据分页的编号查询指定的新闻      10:10
    res.send('GET /newslist  '+pno);
})

//GET /newsdetail?nid=8
app.get('/newsdetail', function(req,res){
    let nid = req.query.nid ;
    if(nid){
        //TODO:根据新闻编号查询数据库
        res.json({});
    }else {
        res.json({nid:0, title:'未指定的新闻',pubTime:0, content:'未指定的新闻内容'});
    }
});