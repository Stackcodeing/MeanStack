// node.js read single record from collection (mongodb)

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

http.createServer(function(req, res){
    MongoClient.connect(url, function (err, client) {
        if(err) throw err;
        var db = client.db('college');
        db.collection("student").findOne({}, function (err, result) {
            if (err) throw err;
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(JSON.stringify(result));
        });
    });
}).listen(8080);