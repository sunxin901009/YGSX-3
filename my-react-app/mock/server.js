let express =require('express');
let app=express();
app.listen(3000);
app.use(function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8005");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
let eatSliders=require("./eat");
app.get('/eat',function (req,res) {
    res.json(eatSliders)
})
