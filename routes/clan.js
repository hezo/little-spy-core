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
	apiCall(req, res, urlConf.url+'/2.0/clan/info/?application_id='+urlConf.apiKey+'&clan_id='+req.params.id);
};

exports.name = function(req, res) {
	urlConf = nconf.get(req.params.zone);
	apiCall(req, res, urlConf.url + '/2.0/clan/list/?application_id='+urlConf.apiKey+'&search='+req.params.name);
};

