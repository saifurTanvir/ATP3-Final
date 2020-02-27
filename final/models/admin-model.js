var db = require('./db');

module.exports= {
	insert: function(user, callback){
		var sql = "insert into admin values(?,?,?,?,?)";
		db.execute(sql, [null, user.name, user.username, user.type, user.password], function(status){
			if(status){
				console.log("Okay");
				
				callback(true);
			}else{
				console.log("Not Okay")

				callback(false);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from admin";
		db.getResults(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	getAllMadicine : function(callback){
		var sql = "select * from madicine";
		db.getResults(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	getById : function(id, callback){
		var sql = "select * from admin where id=?";
		db.getResults(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	getByIdMadicine : function(id, callback){
		var sql = "select * from madicine where id=?";
		db.getResults(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	addMadicine: function(user, callback){
		var sql = "insert into madicine values(?,?,?,?,?,?,?)";
		db.execute(sql, [null, user.name, user.catagory, user.subCatagory, user.vname, user.price,  user.quantity], function(status){
			//console.log(status);
			if(status){
				console.log("Okay");
				
				callback(true);
			}else{
				console.log("Not Okay")

				callback(false);
			}
		});
	},
	getByUname: function(username, callback){
		var sql = "select * from admin where username=?";
		db.getResults(sql, [username], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	updateMadicine : function(user, callback){
		console.log("InMadicine")
		var sql = "update madicine set name=?, catagory=?, subcatagory=?, vname=?, price=?, quantity=? where id=?";
		db.execute(sql, [user.name, user.catagory, user.subcatagory, user.vname, user.price, user.quantity, user.id], function(status){
			console.log(status);
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	deleteMadicine: function(user, callback){
		var sql = "delete from madicine where id=?";
		db.execute(sql, [user], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update : function(user, callback){
		var sql = "update admin set name=?, username=?, type=?, password=? where id=?";
		db.execute(sql, [user.name, user.username, user.type, user.password, user.id], function(status){
			console.log(status)
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}


}