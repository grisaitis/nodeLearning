var http = require("http");
var url = require("url");
var utils = require("./utils.js")

function start() {
	function onRequest(request, response) {
		console.log("request received");
 		// console.log(objToString(url.parse(request.url)))
		// console.log(typeof request.url); // prints "string"
		var pathname = url.parse(request.url).pathname; 
		console.log(pathname); // prints "/"" or "/favicon.ico"
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("hello world!");
		response.end();
		// console.log(request.body); // prints "undefined"
		console.log(utils.objToString(request));
		// console.log(objToString(request.headers));
		// console.log(request.headers['user-agent']);
		//console.log("print to console..."); 
		// this prints 3 times... why?
		// --> chrome issues multiple requests
	}
	var server = http.createServer(onRequest);
	server.listen(8888);
	console.log("server started");
}

exports.start = start; // makes start() available elsewhere
exports.test = "whoa";
