// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();

// App 全局配置
app.set('views','cloud/views');   // 设置模板目录
app.set('view engine', 'ejs');    // 设置 template 引擎
app.use(express.bodyParser());    // 读取请求 body 的中间件

function webUpdate(res) {
    res.redirect('/webUpdate.html');
}
app.get('/',function(req,res){
    res.redirect('/index.html');
    //webUpdate(res);
});

/*app.get('/index.html',function(req,res){
    //webUpdate(res);
});*/

app.get('/hello', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();
