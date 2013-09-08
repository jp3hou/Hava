var connect = require('connect');
var path = require('path');

var servePath = path.resolve(process.argv[2]);

var port = 8888;

console.log(servePath);
console.log("Listening on port: " + port);
connect.createServer(
        connect.static(servePath)
).listen(port);


