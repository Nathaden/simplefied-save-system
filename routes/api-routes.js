// Initialize express router
var express = require('express'),
    router = express(),
    register = require('./register'),
    load = require('./load'),
    save = require('./save')

// Set default API response
router.post('/new/:gameName', register.newGame)
router.get('/game/:gameId', register.getGame)
router.get('/:gameId', load.all);
router.get('/:gameId/:userId', load.user);
router.get('/:gameId/:userId/last', load.userLast);
router.post('/:gameId/:userId/:data', save.save);

// Export API routes
module.exports = router;