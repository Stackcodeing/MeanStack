// node.js delete single record from collection (mongodb)

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

http.createServer(function(req, res){
    MongoClient.connect(url, function(err, dcont){
        if(err) throw err;
        var db = dcont.db('college');
        var ddata = { "demail": "raju.patel@gmail.com" };
        db.collection('student').deleteOne(ddata, function(err, result){
            if(err) throw err;
            console.log('1 record deleted');
        });
    });
}).listen(8080);