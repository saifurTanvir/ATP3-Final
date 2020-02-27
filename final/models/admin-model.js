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
	getById : function(id, callback){
		var sql = "select * from admin where id=?";
		db.getResults(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	}
}