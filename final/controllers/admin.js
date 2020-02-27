var express = require('express'); 
var router = express.Router();
var adminModel = require.main.require('./models/admin-model');

router.get("/", function(req, res){
	res.render("admin/register");
});

router.post("/", function(req, res){
	var data = {
		name: req.body.name,
		username: req.body.username,
		type: req.body.type,
		password: req.body.password
	}

	adminModel.insert(data, function(status){
		if(status){
			console.log("Employee register success!");
			res.redirect("/login");
		}
		else{
			console.log("Employee register fails!!!");
		}
	});

});

router.get("/home", function(req, res){
	res.render("admin/home");
});


module.exports = router;