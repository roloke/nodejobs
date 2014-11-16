var server_port = 8080;
var create = require('./lib/server');

(function () {
	var server = create.createServer();
	server.listen(server_port, function() {
  		console.log('Http server listening on ' + server_port);
	});
	})();