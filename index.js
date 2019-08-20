	const express = require('express');
	const bodyParser = require('body-parser');
	const dbConnection = require('./db');
	
	const app = express();
	
	app.use(bodyParser.json());
	app.use('/api', require('./model/posts'));
	
	
	app.listen(process.env.port || 3000, ()=> {
		console.log("Express server is running");
		dbConnection.connect((err)=>{
			if(err){
				return console.log(err);
			}else{
				console.log("mongoDB connected");
			}
		});
	});
	
	
	
	
	// EXAMPLE FOR MYSQL DB
	// get clients
	/*
	app.get("/api/clients", (req, res)=>{
		try{
			clients.getClients(req, (err, data)=>{
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
	// get client by id
	app.get("/api/client/:id", (req, res)=>{
		try{
			clients.getClient(req.params.id, (err, data)=>{
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
	//insert client
	app.post("/api/client", (req, res)=>{
		try{
			clients.insertClient(req.body, (err, data)=>{
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
	*/