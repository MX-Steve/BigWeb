/*
*本模块包含与“新闻”操作相关的所有路由
 */
const pool = require('../pool');
const express = require('express');
let router = express.Router();

router.get('/list', function(req, res){
    //TODO: 根据客户端提交的pno，查询出对应的新闻
    //res.json(data);
    res.send('GET /news/list')
})

/**
 *根据新闻ID返回新闻详情
 *请求参数：
 nid-新闻ID，必需
 *输出结果：
 {
   "nid": 1,
   ...
 }
 */
router.get('/detail',function(req,res){
    let nid = req.query.nid;
    pool.query("SELECT * FROM mf_news WHERE nid=?", [nid], function(err, result){
        if(err)throw err;
        res.json(result[0]);
    });
});

module.exports = router;