var db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql ="SELECT * FROM admin where username=? and password=?";
		console.log(user.username)
		db.getResults(sql, [user.username, user.password], function(results){
			console.log(results);

			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	}
	
}