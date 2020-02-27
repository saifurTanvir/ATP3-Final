var express = require('express'); 
var router = express.Router();
var adminModel = require.main.require('./models/admin-model');

router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

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
	res.render("admin/home")
	
});

router.get("/edit", function(req, res){
	adminModel.getById(req.cookies['username'], function(result){
		console.log(result);
		res.render('admin/edit', {user: result});
	});
});



module.exports = router;