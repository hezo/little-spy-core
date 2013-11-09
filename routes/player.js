var request = require("request");
var nconf = require('nconf');

nconf.file({ file: 'config/api.json' });
var urlConf = nconf.get('EU');

exports.getId = function(req, res){
    urlConf = nconf.get(req.params.zone);
    request(urlConf.url+'/2.0/account/info/?application_id='+urlConf.apiKey+'&account_id='+req.params.id, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
        res.statusCode = response.statusCode;
        res.send();
    });
};