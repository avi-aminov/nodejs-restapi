	const express = require('express');
	const bodyparser = require('body-parser');
	const dbConnection = require('./db');
	
	//const mysql = require('mysql');
	const mongoClient = require('mongodb').MongoClient;
	const objectID = require('mongodb').ObjectID;

	// EXAMPLE FOR MYSQL DB
	//const clients = require('./model/clients');
	
	const app = express();
	
	dbConnection.connect((err)=>{
		if(err){
			return console.log(err);
		}
		app.listen(3000, ()=> {
			console.log("Exrpess server is runing at port No.: 3000");
		});
	})	
	
	app.use(bodyparser.urlencoded({ extended : true}));
	app.use(bodyparser.json());
	
	app.get('/api/artists', (req, res)=>{
		dbConnection.get().collection("artists").find().toArray((err, result)=>{
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.send(result);
		});	
	})
	
	
	app.post('/api/artists', (req, res)=>{
		dbConnection.get().collection('artists').insertOne(
		{name : req.body.name}, 
		(err, result)=>{
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.send(result);
		});
	})

	
	app.get('/api/artist/:id', (req, res)=>{
		dbConnection.get().collection("artists").findOne(
		{ _id: objectID(req.params.id)}, 
		(err, doc)=>{
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.send(doc);
		})
	})
	
	
	app.put('/api/artist/:id', (req, res)=>{
		dbConnection.get().collection("artists").updateOne(
			{	_id: objectID(req.params.id)},
			{ 	$set: {name: req.body.name}}, 
			(err, result)=>{
				if(err){
					console.log(err);
					return res.sendStatus(500);
				}
				res.sendStatus(200);
			}
		)
	})
	
	
	app.delete('/api/artist/:id', (req, res)=>{
		dbConnection.get().collection("artists").deleteOne(
		{ _id: objectID(req.params.id)}, 
		(err, doc)=>{
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		})
	})
	
	
	

	
	
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