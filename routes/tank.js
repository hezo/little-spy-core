var request = require("request");
var nconf = require('nconf');

nconf.file({ file: 'config/api.json' });
var urlConf = nconf.get('eu');

function apiCall(req, res, url) {
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
        res.statusCode = response.statusCode;
        res.send();
    });
}

exports.encyclopedia = function(req, res){
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url+'/2.0/encyclopedia/tanks/?application_id='+urlConf.apiKey);
};

exports.engines = function(req, res){
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url+'/2.0/encyclopedia/tankengines/?application_id='+urlConf.apiKey);
};

exports.radios = function(req, res){
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url+'/2.0/encyclopedia/tankradios/?application_id='+urlConf.apiKey);
};

exports.guns = function(req, res){
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url+'/2.0/encyclopedia/tankguns/?application_id='+urlConf.apiKey);
};

exports.suspension = function(req, res){
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url+'/2.0/encyclopedia/tanksuspension/?application_id='+urlConf.apiKey);
};

exports.turrets = function(req, res){
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url+'/2.0/encyclopedia/tankturrets/?application_id='+urlConf.apiKey);
};

exports.achievements = function(req, res){
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url+'/2.0/encyclopedia/achievements/?application_id='+urlConf.apiKey);
};

exports.id = function(req, res){
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url+'/2.0/encyclopedia/tankinfo/?application_id='+urlConf.apiKey+'&tank_id='+req.params.id);
};
