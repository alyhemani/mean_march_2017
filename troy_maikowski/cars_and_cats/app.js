var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log('client request URL:', req.url);
  if (req.url === '/cars/') {
    fs.readFile('views/cars.html', 'utf8', function (errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  } else if (req.url === '/cats/') {
    fs.readFile('views/cats.html', 'utf8', function (errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  } else if (req.url === '/cars/new/') {
    fs.readFile('views/new_car.html', 'utf8', function (errors, contents) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
  } else if (req.url === '/images/car1.jpg') {
    fs.readFile('./images/car1.jpg', function(errors, contents) {
      res.writeHead(200, {'Content-type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  } else if (req.url === '/images/car2.jpg') {
    fs.readFile('./images/car2.jpg', function(errors, contents) {
      res.writeHead(200, {'Content-type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  } else if (req.url === '/images/cat1.jpg') {
    fs.readFile('./images/cat1.jpg', function(errors, contents) {
      res.writeHead(200, {'Content-type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  } else if (req.url === '/images/cat2.jpg') {
    fs.readFile('./images/cat2.jpg', function(errors, contents) {
      res.writeHead(200, {'Content-type': 'image/jpg'});
      res.write(contents);
      res.end();
    });
  } else {
    res.writeHead(404);
    res.end('File not found!!!');
  }
});

server.listen(7077);

console.log('Running in localhost at port 7077');
