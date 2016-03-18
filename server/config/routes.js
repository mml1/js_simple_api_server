var persons = require("../controllers/persons.js");
module.exports= function(app){
	//routes here
	app.get("/", function (req, res){
		persons.find_all(req, res);
	});

	app.get("/new/:name", function (req, res){
		persons.add_one(req,res, req.params.name);
	});

	app.get("/remove/:name", function (req,res){
		persons.remove_single(req, res, req.params.name);		
	});
	app.get("/:name", function (req, res){
		persons.find_single(req, res, req.params.name)
	});
}