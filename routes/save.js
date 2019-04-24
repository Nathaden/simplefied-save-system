var config = require('../config');
var MongoClient = require('mongodb').MongoClient;

exports.save = function(req, res) {
	MongoClient.connect(config.MONGO_URL, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db(config.MONGO_DB_NAME);
	  dbo.collection(config.MONGO_SAVES_COLLECTION_NAME).insert({
			'gameId': req.body.gameId,
      'userId': req.body.userId,
      'data': req.body.data
		}).toArray(function(err, result) {
	    if (err) throw err;
	    res.send('saved');
	    db.close();
	  });
	});
};