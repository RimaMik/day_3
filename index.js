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
// var express = require("express");
// var app = express();
// app.get("/google", function(req, res){
//     res.redirect("https://google.com");
// });
// app.get("/google/:search", function(req, res){
//     var n = req.params.search;
//     res.redirect("https://google.com/search?q=" + n);
// });
// app.get("/", function(req, res){
//     res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function(req, res){
//     var n = req.params.name;
//     res.send("<h1>Hello " + n + "</h1>");
// });
// app.get("/:name/:surname", function(req, res){
//     var n = req.params.name;
//     var sn = req.params.surname;
//     res.send("<h1>Hello " + n + " " + sn + "</h1>");
// });
// app.get("/*", function(req, res){
//     res.status(404).send('Sorry, we cannot find that!');
// });
// app.listen(3000, function(){
//     console.log("Example is running on port 3000");
// });
//5545
// var express = require("express");
// var app = express();

// var Square = require("./module");
// var MySquareObject =  new Square(12);

// function main(){
//     console.log(MySquareObject.getArea());
// }

// main();

// app.use(express.static("public"));

// app.get("/", function(req, res){
//    res.redirect("index.html");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


// var fs = require("fs");
// function main (){
//     fs.writeFile("hello.txt", "Hello World\n", function(err){
//         console.log("fs.writeFile ended");
//     });
//     console.log("fs.writeFile");
// }
// main();

// var fs = require("fs");
// function main (){
//     fs.writeFileSync("hello.txt", "Hello World\n");
//     console.log("fs.writeFile");
// }
// main();


// var fs = require("fs");
// var dummyText = "Apple yep";

// function main(){
//     fs.writeFileSync("dummytext.txt", dummyText);
//     var text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",
//         text.replace("Apple", "Microsoft")
//     )
// }

// main();

var obj = {
    "first_name": "Rima",
    "last_name": "Mikayelyan",
    "age": 16,
    "tumo_student": true
}

var myJSON = JSON.stringify(obj);
console.log(myJSON);
var fs = require("fs");
function main(){
    fs.writeFileSync("obj.json", myJSON);
}
main();