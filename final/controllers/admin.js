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
		//console.log(result);
		res.render('admin/edit', {user: result});
	});
});


router.get("/addMadicine", function(req, res){
	res.render("admin/addMadicine")
	
});

router.post("/addMadicine", function(req, res){
	var data = {
		name: req.body.name,
		catagory: req.body.catagory,
		subCatagory: req.body.subCatagory,
		vname: req.body.vname,
		price: req.body.price,
		quantity: req.body.quantity,	
	}
	adminModel.addMadicine(data, function(status){
		if(status){
			console.log("Madicine Added!");
			res.redirect("/admin/home");
		}
		else{
			console.log("Madicine Not added!!!");
			res.redirect("/admin/home");
		}
	});
	
});



module.exports = router;