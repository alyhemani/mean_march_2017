var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  console.log('client request URL:', req.url);
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', function (errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  } else if (req.url === '/dojo.html') {
    fs.readFile('dojo.html', 'utf8', function (errors, contents) {
      res.writeHead(200, {'Content-type': 'text/html'});
      res.write(contents);
      res.end();
    });
  } else {
    res.writeHead(404);
    res.end('File not found!!!');
  }
});

server.listen(6789);

console.log("Running in localhost at port 6789");
