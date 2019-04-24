var config = require('../config');
var MongoClient = require('mongodb').MongoClient;

exports.newGame = function (req, res) {
	let gameId = Math.random().toString(36).substr(2, 9);
	MongoClient.connect(config.MONGO_URL, function (err, db) {
		if (err) throw err;
		var dbo = db.db(config.MONGO_DB_NAME);
		dbo.collection(config.MONGO_SAVES_COLLECTION_NAME).insert({
			'gameId': gameId,
			'gameName': req.body.gameName
		}).toArray(function (err, result) {
			if (err) throw err;
			res.send(gameId);
			db.close();
		});
	});
};

exports.getGame = function (req, res) {
	MongoClient.connect(config.MONGO_URL, function (err, db) {
		if (err) throw err;
		var dbo = db.db(config.MONGO_DB_NAME);
		dbo.collection(config.MONGO_SAVES_COLLECTION_NAME).find({
			'gameId': req.body.gameId
		}).toArray(function (err, result) {
			if (err) throw err;
			res.send(result);
			db.close();
		});
	});
};