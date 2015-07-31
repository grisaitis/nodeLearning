var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname; 
		console.log("request received for " + pathname);
		route(handle, pathname, response);
	}
	var server = http.createServer(onRequest);
	server.listen(8888);
	console.log("server started");
}

exports.start = start; // makes start() available elsewhere
exports.test = "whoa"; // testing out exports...

