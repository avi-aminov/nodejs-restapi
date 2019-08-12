	const express = require('express');
	const mysql = require('mysql');
	const bodyparser = require('body-parser');

	const tenant = require('./model/tenants');
	const app = express();

	app.listen(3000, ()=> {
		console.log("Exrpess server is runing at port No.: 3000");
	});
	
	app.use(bodyparser.urlencoded({extended : false}));
	
	
	/* get tenant by id */
	app.get("/api/tenant/:id", (req, res)=>{
		try{
			tenant.getTenant(req.params.id, (err, data)=>{
				if(!err){
					res.send(data);
				}else{
					throw err;
				}
			});
		}catch(error){
			res.status(500).send(error);
		}
	});
	
	
	/* get all tenants */
	app.post("/api/tenant/", (req, res)=>{
		
	});

	
	/* edit tenant by id */
	app.put("/api/tenant/:id", (req, res)=>{
		
	});	

	
	/* delete tenant by id */
	app.delete("/api/tenant/:id", (req, res)=>{
		
	});	


	
	/*
	let db = mysql.createConnection({
		host: 'localhost',
		port : 3306,
		user: 'root',
		password: '',
		database: 'restapi'
	});



	db.connect((err)=>{
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
		db.query('SELECT * FROM clients', (err, rows, fields)=>{
			if(!err){
				res.send(rows);
			}else{
				console.log(err);
			}
		});
	});


	// Get clients by ID
	app.get('/clients/:id', (req, res)=>{
		db.query('SELECT * FROM `clients` WHERE clientId = ?', [req.params.id],
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
		db.query('DELETE FROM clients WHERE clientId = ?', [req.params.id],
		(err, rows, fields)=>{
			if(!err){
				res.send('Deleted seccessfully');
			}else{
				console.log(err);
			}
		});
	});


	// Insert clients
	app.post('/add-client/', (req, res, next)=>{
		let emp = req.body;
		let firstName = '';
		
		if(emp.firstName){
			firstName = emp.firstName
		}
		console.log(emp);
		
		var sql = "INSERT INTO `clients` (`clientId`, `firstName`, `lastName`, `age`, `adress`, `dateEntered`, `dateUpdated`) VALUES ?";
		var values = [
			[null, firstName, 'last Name 4', 36, 'your adress', '2019-08-11 00:00:00', '2019-08-11 18:50:19']
		];
	  
		db.query(sql, [values], (err, result, fields)=>{
			if (err){
				throw err;
			} 
			
			console.log(result);
			console.log("Number of rows affected : " + result.affectedRows);
			console.log("Number of records affected with warning : " + result.warningCount);
			console.log("Message from MySQL Server : " + result.message);
		
		});
		//next();
	});
	*/