	const mongoClient = require('mongodb').MongoClient;
	const config = require('./config');
	
	var state = {
		db: null
	};
	
	exports.connect = (done)=>{
		if(state.db){
			return done();
		}
		mongoClient.connect(config.mongodb.url , {useNewUrlParser: true, useUnifiedTopology: true}, (err, db)=>{
			if(err){
				return done(err);
			}
			state.db = db.db("restapi");
			done();
		})
	}
	
	exports.get = ()=>{
		return state.db;
	}