var server = require("./server.js");
var utils = require("./utils.js");

server.start();

console.log(utils.objToString(server));