var express = require('express'); 
var router = express.Router();
var customerModel = require.main.require('./models/customer-model');

router.get("/", function(req, res){
	res.render("customer/register");
});

router.post("/", function(req, res){
	var data = {
		name: req.body.name,
		username: req.body.username,
		type: req.body.type,
		password: req.body.password
	}

	customerModel.insert(data, function(status){
		if(status){
			console.log("Customer register success!");
			res.redirect("/login");
		}
		else{
			console.log("Customer register fails!!!");
		}
	});

});

router.get("/home", function(req, res){
	res.render("customer/home");
});


module.exports = router;