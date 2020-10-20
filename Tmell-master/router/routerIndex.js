const express = require('express');
const http = require('http');
const router = express.Router();


router.post('/index', (req, res) => {
    let url = 'http:localhost:3000/public/db.json';
    http.get(url, (res1) => {
        let resData = ''
        res1.on('data', (chunk) => {
            // 请求到的数据会分段传输，每接收到一段数据就会触发一次data事件
            // chunk是分段数据，默认二进制数据流
            // console.log(chunk)
            console.log('接收到一段数据。。。')
                // console.log(chunk.toString())
            resData += chunk.toString()
        })
        res1.on('end', () => {
            // 数据流传输完毕时触发end事件
            console.log(resData)
            res.send({ err: 0, msg: '查询成功', list: resData })
        })
    })
})

module.exports = router