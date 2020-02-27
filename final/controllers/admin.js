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
	console.log(req.cookies['username']);
	adminModel.getByUname(req.cookies['username'], function(result){
		res.render('admin/edit', {user: result});
	});
});

router.post('/edit/:id', function(req, res){
	
		var user = {
			id: req.params.id, 
			name: req.body.name,
			username: req.body.username,
			type: req.body.type,
			password: req.body.password
			
		};

		adminModel.update(user, function(status){
			if(status){
				res.redirect('/admin/edit/'+req.params.id);       
			}else{
				res.redirect('/admin/edit/'+req.params.id);
			}
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

router.get("/controlMadicine", function(req, res){
	adminModel.getAllMadicine(function(results){
		if(results.length > 0){
			res.render('admin/controlMadicine', {userlist: results});
		}else{
			res.redirect('admin/home');
		}
	});
});

router.get('/editMadicine/:id', function(req, res){
	adminModel.getByIdMadicine(req.params.id, function(result){
		res.render('admin/editMadicine', {user: result});
	});
});

router.post('/editMadicine/:id', function(req, res){
	
		var user = {
			name: req.body.name,
			catagory: req.body.catagory,
			subcatagory: req.body.subcatagory,
			vname: req.body.vname,
			price: req.body.price,
			quantity: req.body.quantity	
		}

		adminModel.updateMadicine(user, function(status){
			if(status){
				res.redirect('/admin/editMadicine/'+req.params.id);       
			}else{
				res.redirect('/admin/editMadicine/'+req.params.id);
			}
		});
});

router.get('/deleteMadicine/:id', function(req, res){
	adminModel.deleteMadicine(req.params.id, function(status){
		if(status){
				console.log("Deleted Successfully!");
				res.redirect('/admin/home');
			}else{
				res.redirect('/');
			}
		
	});
});






module.exports = router;