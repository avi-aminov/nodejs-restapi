const mysql = require('mysql');

let mysqlConnection = mysql.createConnection({
	host: 'localhost',
	port : 3306,
	user: 'root',
	password: '',
	database: 'restapi'
});

mysqlConnection.connect((err)=>{
	if(!err){
		console.log("mysqlConnection connected");
	}else{
		console.log("mysqlConnection error \n" + JSON.stringify(err,undefined,2));
	}
});