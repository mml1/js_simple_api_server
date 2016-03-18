var express = require("express");
var app = express();
var path = require("path");

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // will let use read json data

//for this project do not need views or static
// app.use(express.static(path.join(__dirname, "./client/static")));
// app.set("views", path.join(__dirname, "./client/views"));
// app.set("view engine", "ejs");

require("./server/config/mongoose.js");
var routes = require("./server/config/routes.js")
routes(app);

app.listen("9500", function (){
	console.log("Listening on 9500");
});
