var express = require('express'); 
var router = express.Router();
var adminModel = require.main.require('./models/admin-model');
var userModel = require.main.require('./models/user-model');

router.get("/", function(req, res){
	res.render("login/login");
});

router.post('/', function(req, res){

	var user ={
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(results){
		//console.log(results.type);
	 	if(results.type == "admin"){
			//res.cookie('username', req.body.uname);
			res.redirect('/admin/home');
		}
		else if(results.type == "customer"){
			//res.cookie('username', req.body.uname);
			res.redirect('/customer/home');
		}else{
			res.send('invalid username/password');
		}
	});
});



module.exports = router;