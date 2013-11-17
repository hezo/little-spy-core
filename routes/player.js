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

exports.id = function(req, res){
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url+'/2.0/account/info/?application_id='+urlConf.apiKey+'&account_id='+req.params.id);
};

exports.tanks = function(req, res) {
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url + '/2.0/account/tanks/?application_id='+urlConf.apiKey+'&account_id='+req.params.id);
};

exports.stats = function(req, res) {
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url + '/2.0/stats/accountbytime/?application_id='+urlConf.apiKey+'&account_id='+req.params.id+'&hours_ago='+req.params.hours);
};

exports.name = function(req, res) {
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url + '/2.0/account/list/?application_id='+urlConf.apiKey+'&search='+req.params.name);
};

exports.rating = function(req, res) {
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url+'/2.0/account/ratings/?application_id='+urlConf.apiKey+'&account_id='+req.params.id);
};
