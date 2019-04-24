var config = require('../config');
var MongoClient = require('mongodb').MongoClient;

exports.all = function(req, res) {
	MongoClient.connect(config.MONGO_URL, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db(config.MONGO_DB_NAME);
	  dbo.collection(config.MONGO_SAVES_COLLECTION_NAME).find({
			'gameId': req.body.gameId
		}).toArray(function(err, result) {
	    if (err) throw err;
	    res.send(result);
	    db.close();
	  });
	}); 
};


exports.user = function(req, res) {
	MongoClient.connect(config.MONGO_URL, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db(config.MONGO_DB_NAME);
	  dbo.collection(config.MONGO_SAVES_COLLECTION_NAME).find({
			'gameId': req.body.gameId,
			'userId': req.body.userId
		}).toArray(function(err, result) {
	    if (err) throw err;
	    res.send(result);
	    db.close();
	  });
	}); 
};

exports.userLast = function(req, res) {
	MongoClient.connect(config.MONGO_URL, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db(config.MONGO_DB_NAME);
	  dbo.collection(config.MONGO_SAVES_COLLECTION_NAME).find({
			'gameId': req.body.gameId,
			'userId': req.body.userId
		}).toArray(function(err, result) {
	    if (err) throw err;
	    res.send(result);
	    db.close();
	  });
	});  
};
