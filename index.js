const express = require('express'); //tạo biến express và add thư viện có tên express vào
const app = express(); //tạo biến nhận thư viện express()
var bodyParser = require('body-parser');
const port = 8888; //tạo cổng cho trang web trên máy

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/Hello', function (req, res) {
    res.send("Hello");
});

// app.get('/welcome', function (req, res) {
//     res.send("Hello " + req.query.name);
// });

app.post('/welcome', function (req, res) {
    res.send("Name: " + req.body.name + "<br>" + "Pass: " + req.body.pass);
});

app.get('/phap-luat', function (req, res) {
    res.send("Tin phap luat");
});

app.get("/register", function (req, res) {
    res.render("register");
})

app.post("/post", function (req, res) {
    res.send();

})

app.listen(port, function() {
    console.log(`Hello World`);
});