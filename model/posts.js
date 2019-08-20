	const express = require('express');
	const router = express.Router();
	const mongoClient = require('mongodb').MongoClient;
	const objectID = require('mongodb').ObjectID;
	const dbConn = require('../config');
	const dbConnection = require('../db');
	
	// get all posts rows
	router.get('/posts', (req, res)=>{
		dbConnection.get().collection("posts").find().toArray((err, result)=>{
			try{
				if(!err){
					res.send(result);
				}else{
					throw err;
				}
			}catch(error){
				res.status(500).send(error);
			}
		});
		
	});
	
	// insert one post
	router.post('/post', (req, res)=>{
		dbConnection.get().collection('posts').insertOne(
		{
			title : req.body.title,
			slug : req.body.slug,
			body : req.body.body
		}, 
		(err, result)=>{
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.send(result);
		});
	});
	
	// select post by id
	router.get('/post/:id', (req, res)=>{
		dbConnection.get().collection("posts").findOne(
		{ 
			_id : objectID(req.params.id)
		}, 
		(err, doc)=>{
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.send(doc);
		});
	});
	
	// update post by id
	router.put('/post/:id', (req, res)=>{
		dbConnection.get().collection("posts").updateOne(
			{	_id: objectID(req.params.id)},
			{ 	$set: {
						title : req.body.title,
						slug : req.body.slug,
						body : req.body.body
					}
			}, 
			(err, result)=>{
				if(err){
					console.log(err);
					return res.sendStatus(500);
				}
				res.sendStatus(200);
			}
		);
	});
	
	// delete post by id
	router.delete('/post/:id', (req, res)=>{
		dbConnection.get().collection("posts").deleteOne(
		{ _id: objectID(req.params.id)}, 
		(err, doc)=>{
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		});
	});
	

	module.exports = router;
