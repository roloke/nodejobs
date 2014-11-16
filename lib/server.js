var restify = require('restify');
var validator = require('validator');

function createServer() {

	var server = restify.createServer({
		name:'nodejobs'
	});
	server.use(restify.queryParser({ mapParams: false }));
	server.use(restify.bodyParser());

	server.get('/',function root(req,res,next){
		res.send(200,'Incorrect Url');
		next();
	});

	return server;
}

module.exports = {
    createServer: createServer
};