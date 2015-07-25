var exec = require("child_process").exec;

function start(response) {
	console.log("request handler 'start' was called");

	exec("ls -la", function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		// response.write("hello world! heh");
		response.write(stdout);
		response.end();
	})

}

function upload() {
	console.log("request handler 'upload' was called");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;
