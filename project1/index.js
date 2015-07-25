var server = require("./server.js");
var utils = require("./utils.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(router.route, handle);

// console.log(utils.objToString(server));