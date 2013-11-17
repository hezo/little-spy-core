
/**
 * Module dependencies.
 */
var nconf = require('nconf');
var express = require('express');
var routes = require('./routes');

var player = require('./routes/player');
var clan = require('./routes/clan');
var tank = require('./routes/tank');

var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	console.log("development");
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/:zone/player/id/:id', player.id);
app.get('/:zone/player/id/:id/tanks', player.tanks);
app.get('/:zone/player/name/:name', player.name);
app.get('/:zone/player/id/:id/hours/:hours', player.stats);
app.get('/:zone/player/id/:id/rating', player.rating);

app.get('/:zone/clan/name/:name', clan.name);
app.get('/:zone/clan/id/:id', clan.id);

app.get('/:zone/tank/id/:id', tank.id);
app.get('/:zone/tank/guns', tank.guns);
app.get('/:zone/tank/suspension', tank.suspension);
app.get('/:zone/tank/radios', tank.radios);
app.get('/:zone/tank/engines', tank.engines);
app.get('/:zone/tank/turrets', tank.turrets);

app.get('/:zone/achievements', tank.achievements);


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
