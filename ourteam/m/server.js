var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
  	console.log(url.parse(request.url))
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Worldsss");
    response.end();
  }

  http.createServer(onRequest).listen(8000);
  console.log("Server has startedsss");
}

exports.start = start;

