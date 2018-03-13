var http = require('http');
var dt = ('./myfirstmodule');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('hello world');
    res.write('Receive request from server' + req.url);
    res.write('Custom module call dat time currently' + dt.myDateTime);
    res.end();
}).listen(8080);