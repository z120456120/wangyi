const express = require('express');
const path = require('path');
const routerIndex = require('./router/routerIndex');
const app = express();
app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/index', routerIndex)
app.listen(3000, () => {
    console.log('-------------服务器启动成功-------------')
})