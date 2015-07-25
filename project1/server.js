var http = require("http");

http.createServer(
	function(request, response) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
		console.log("print to console..."); // this prints 3 times... why?
	}
).listen(8888);

