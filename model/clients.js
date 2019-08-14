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

	const getDataTime = ()=> { 
		let date;
		date = new Date();
		date = date.getUTCFullYear() + '-' +
			('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
			('00' + date.getUTCDate()).slice(-2) + ' ' + 
			('00' + date.getUTCHours()).slice(-2) + ':' + 
			('00' + date.getUTCMinutes()).slice(-2) + ':' + 
			('00' + date.getUTCSeconds()).slice(-2);
		return date;
	};
	
	
	exports.getClients = (req, callback)=>{
		let sql = 'SELECT * FROM clients';
		db.query(sql, (err, data)=>{
			if(!err){
				callback(null, data);
			}else{
				callback(err);
			}
		});
	}
	
	
	exports.getClient = (id, callback)=>{
		let sql = 'SELECT * FROM clients WHERE clientId = ?';
		db.query(sql, [id], (err, data)=>{
			if(!err){
				callback(null, data);
			}else{
				callback(err);
			}
		});
	}
	
	
	exports.insertClient = (data, callback)=>{
		let sql = 'INSERT into clients set ?';
		
		let clientData = {
			'firstName': ( data.firstName ? data.firstName : ''),
			'lastName': ( data.lastName ? data.lastName : ''),
			'age': ( data.age ? data.age : ''),
			'adress': ( data.adress ? data.adress : ''),
			'dateEntered': getDataTime()
		};
		
		if(clientData.firstName && clientData.lastName && clientData.age && clientData.adress){
			db.query(sql, [clientData], (err, data)=>{
				if(!err){
					callback(null, data);
				}else{
					callback(err);
				}
			});
		}else{
			callback('Missing parameter');
		}	
	}