var config = require('../config');
var MongoClient = require('mongodb').MongoClient;

exports.save = function (req, res) {

  if (checkGameExists(req.body.gameId)) {
    MongoClient.connect(config.MONGO_URL, function (err, db) {
      if (err) throw err;
      var dbo = db.db(config.MONGO_DB_NAME);
      dbo.collection(config.MONGO_SAVES_COLLECTION_NAME).insert({
        'gameId': req.body.gameId,
        'userId': req.body.userId,
        'data': req.body.data
      }).toArray(function (err, result) {
        if (err) throw err;
        res.send('saved');
        db.close();
      });
    });
  } else {
    res.send('error game not found');
  }
};

checkGameExists = function(gameId){
  MongoClient.connect(config.MONGO_URL, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db(config.MONGO_DB_NAME);
	  dbo.collection(config.MONGO_GAMES_COLLECTION_NAME).find({
			'gameId': gameId
		}).toArray(function(err, result) {
	    if (err) throw err;
      db.close();
      return result.length > 0;
	  });
	}); 
}