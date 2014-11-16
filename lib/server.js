var restify = require('restify');
var routes = require('./routes');

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
	server.get('/',function root(req,res,next){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end('welcome to nodejobs application');
	});

	server.get('/nodejobs/getJob/:id',routes.getJob);
	server.post('/nodejobs/savePosting', routes.savePosting);	

	return server;
}



module.exports = {
    createServer: createServer
};