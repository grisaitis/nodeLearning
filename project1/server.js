var http = require("http");

var server = http.createServer(
	function(request, response) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
		console.log("print to console..."); // this prints 3 times... why?
	}
);

server.listen(8888);

