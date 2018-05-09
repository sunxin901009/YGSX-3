let express = require('express')
let app = express();
let bodyParser=require('body-parser')
let session=require('express-session')
app.listen(3000);
app.use(bodyParser.json())
app.use(cors());

let sliders = require('./home/sliders');
let fruits = require('./home/fruits');
let kinds = require('./home/kinds');
let fruitsList = require('./home/fruitList');
let classify = require('./classify/fruits');

//首页数据
app.get('/slider', function (req, res) {//轮播图
    res.json(sliders)
});
app.get('/kinds', function (req, res) {//种类
    res.json(kinds)
});
app.get('/fruitsList', function (req, res) {//点击种类 跳转数据
    res.json(fruitsList)
});
app.get('/fruit', function (req, res) {//水果、海鲜、肉类数据
    let { offset, limit} = req.query;
    offset = parseInt(offset);
    limit = parseInt(limit);
    let lists = fruits.slice(offset, offset + limit);
    return res.json({ lists })
});
//分类页数据
app.get('/classify', function (req, res) {//所有数据
    res.json(classify)
});

function cors() {
    return function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8000");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', true);
        next();
    }
}