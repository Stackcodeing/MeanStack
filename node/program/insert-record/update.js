// node.js update single record from collection (mongodb)

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

http.createServer(function(req, res){
    MongoClient.connect(url, function(err, dcont){
        if(err) throw err;
        var db = dcont.db('college');
        var odata = { "dname": "shiv" };
        var ndata = { $set: { "dname": "mehul", "demail": "rahul.patel@gmail.com", "daddress": "baroda" } };
        db.collection('student').updateOne(odata, ndata, function (err, result){
            if(err) throw err;
            console.log("record updated");
        });
    });
}).listen(8080);