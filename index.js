//1
// console.log("hello world");
// var os = require("os");
// var message = "The platform is ";
// function main(){
//     console.log(message = os.platform());
// }
// main();
//2
// var express = require("express");
// var app = express();

// app.get("/", function (req, res){
//     res.send("Hello world");
// });

// app.listen(3000, function(){
//     console.log("Example is running on port 3000");
// });
//3
var express = require("express");
var app = express();

app.get("/google", function(req, res){
    res.redirect("https://google.com");
});

app.get("/google/:search", function(req, res){
    var n = req.params.search;
    res.redirect("https://google.com/search?q=" + n);
});

app.get("/", function(req, res){
    res.send("<h1>Hello world</h1>");
});

app.get("/name/:name", function(req, res){
    var n = req.params.name;
    res.send("<h1>Hello " + n + "</h1>");
});

app.get("/:name/:surname", function(req, res){
    var n = req.params.name;
    var sn = req.params.surname;
    res.send("<h1>Hello " + n + " " + sn + "</h1>");
});

app.listen(3000, function(){
    console.log("Example is running on port 3000");
});