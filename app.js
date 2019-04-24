
/**
 * Module dependencies.
 */

var express = require('express'), 
  http = require('http'),
  path = require('path'),
  apiRoutes = require("./routes/api-routes"),
  config = require('./config')
  ;

var app = express();

// all environments
app.set('port', config.APP_PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Use Api routes in the App
app.use('/api', apiRoutes);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
