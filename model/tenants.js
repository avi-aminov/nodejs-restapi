	const mysql = require('mysql');
	
	const db = mysql.createConnection({
		host : 'localhost',
		port : 3306,
		user : 'root',
		password : '',
		database : 'restapi'
	});
	
	db.connect((err)=>{
		if(!err){
			console.log("db connected");
		}else{
			console.log("db connected error \n" + JSON.stringify(err,undefined,2));
		}
	});
	
	exports.getTenant = (id, callback)=>{
		let sql = 'SELECT * FROM tenants WHERE id = ?';
		db.query(sql, [id], (err, data)=>{
			if(!err){
				callback(null, data);
			}else{
				callback(err);
			}
		});
	}
	
	
	exports.insertTenant = (data, callback)=>{
		
	}