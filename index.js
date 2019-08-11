const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');

let app = express();
app.use(bodyparser.json());

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

app.listen(3000, ()=> {
	console.log("Exrpess server is runing at port no: 3000");
});


// Get all clients
app.get('/clients', (req, res)=>{
	mysqlConnection.query('SELECT * FROM clients', (err, rows, fields)=>{
		if(!err){
			res.send(rows);
		}else{
			console.log(err);
		}
	});
});


// Get clients by ID
app.get('/clients/:id', (req, res)=>{
	mysqlConnection.query('SELECT * FROM `clients` WHERE clientId = ?', [req.params.id],
	(err, rows, fields)=>{
		if(!err){
			res.send(rows);
		}else{
			console.log(err);
		}
	});
});


// Delete clients by ID
app.delete('/clients/:id', (req, res)=>{
	mysqlConnection.query('DELETE FROM clients WHERE clientId = ?', [req.params.id],
	(err, rows, fields)=>{
		if(!err){
			res.send('Deleted seccessfully');
		}else{
			console.log(err);
		}
	});
});


// Insert clients
app.post('/add-client/', (req, res)=>{
	
	let emp = req.body;

	console.log(emp);
	
	/*
	mysqlConnection.query("INSERT INTO `clients` (`clientId`, `firstName`, `lastName`, `age`, `adress`, `dateEntered`, `dateUpdated`) VALUES (null, 'cdf', 'rgre', '', 'tel aviv', '2019-08-11 00:00:00', '2019-08-11 18:50:19')", [req.params.id],
	(err, rows, fields)=>{
		if(!err){
			res.send('Insert seccessfully');
		}else{
			console.log(err);
		}
	});
	*/
});