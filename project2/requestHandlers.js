function start(response) {
	console.log('respondinnnnng');
	response.write('yeaaaaaah');
	response.end();
}

function upload(response) {
	console.log('responding to upload...');
	response.write('uh wtf');
	response.end();
}

exports.start = start;
exports.upload = upload;
