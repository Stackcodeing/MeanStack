var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('<h1>First Express program </h1>');
});
app.listen(8080);
// var Server = app.listen(8080, function(){
//     console.log('listen to port 8080');
// });



// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('hello world');
//     res.write('Receive request from server' + req.url);
//     res.end();
// }).listen(8080);