var express = require('express'); 
var router = express.Router();
//var adminModel = require.main.require('./models/admin-model');

router.get("/register", function(req, res){
	res.render("admin/register");
});



module.exports = router;