var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'content-type':'text/plain'});
  res.end("Hello, World!\n");
}).listen(8124);
console.log('server is running on 8124');
