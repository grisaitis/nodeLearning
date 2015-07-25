var http = require("http");

function onRequest(request, response) {
	console.log("request received");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("hello world!");
	response.end();
//	console.log("print to console..."); // this prints 3 times... why?
}

var server = http.createServer(
	onRequest
);

server.listen(8888);

console.log("server started");

