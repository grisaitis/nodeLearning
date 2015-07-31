var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var postData = '';
		var pathname = url.parse(request.url).pathname; 
		console.log("request received for " + pathname);
		
		request.setEncoding('utf8'); // same as what our html uses
		request.addListener('data', function(postDataChunk){
			postData += postDataChunk;
			console.log('POST is gettin chunky: ' 
				+ postDataChunk
				+ '/// end.'
			);
		});
		request.addListener('end', function(){
			route(handle, pathname, response, postData);
		});
	}
	var server = http.createServer(onRequest);
	server.listen(8888);
	console.log("server started");
}

exports.start = start; // makes start() available elsewhere
exports.test = "whoa"; // testing out exports...

