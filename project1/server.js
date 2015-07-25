var http = require("http");

function start() {
	function onRequest(request, response) {
		console.log("request received");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("hello world!");
		response.end();
		//console.log("print to console..."); 
		// this prints 3 times... why?
		// --> chrome issues multiple requests
	}
	var server = http.createServer(onRequest);
	server.listen(8888);
	console.log("server started");
}

exports.start = start; // makes start() available elsewhere
