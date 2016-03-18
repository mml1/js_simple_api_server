var mongoose = require("mongoose")
var Person = mongoose.model("Person")
module.exports = {
	find_all: function(req, res){
		Person.find({}, function(err, people){
			res.json(people);
		});
	},
	add_one: function (req, res, name){
		console.log(name , "got the name with space")
		new_person = new Person({name: name});
		new_person.save(function(err){
			
			if(err){
				console.log("error in adding")
			} else {	
				console.log("added to db")
				res.redirect("/")
			}
		});
	},
	remove_single: function(req, res, name){
		Person.findOne({name:name}, function (err, person){
			if(err){
				res.json({message: "not in database"})
			} else {
				Person.remove({name:name}, function(err){
					res.redirect("/");
				});
				
			}
		});

	} ,
	find_single: function (req, res, name){
		Person.findOne({name:name}, function (err, person){
			if(err){
				res.json({message: "not in database"})
			} else {
				res.json(person);
			}
		});
		
	}
};