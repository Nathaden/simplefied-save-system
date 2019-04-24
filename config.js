// config.js
const env = require('dotenv');
env.config();

module.exports = {
	APP_PORT: process.env.PORT,
	MONGO_URL : process.env.MONGO_URL,
	MONGO_DB_NAME : process.env.MONGO_DB_NAME,
	MONGO_GAMES_COLLECTION_NAME : process.env.MONGO_GAMES_COLLECTION_NAME,
	MONGO_SAVES_COLLECTION_NAME : process.env.MONGO_SAVES_COLLECTION_NAME
};