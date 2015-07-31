function route(handle, pathname, response) {
	console.log("about to route a request for " + pathname);
	if ((typeof handle[pathname]) === 'function') {
		console.log('calling request handler for ' + pathname);
		handle[pathname](response);
	}
	else {
		console.log('murr no function :(');
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write('404 not found :(');
		response.end();
	}
}

exports.route = route;

