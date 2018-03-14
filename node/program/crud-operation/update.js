// node.js update single record from collection (mongodb)

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

http.createServer(function(req, res){
    MongoClient.connect(url, function(err, dcont){
        if(err) throw err;
        var db = dcont.db('college');
        var odata = { "dname": "mehul" };
        var ndata = { $set: { "dname": "raju", "demail": "raju.patel@gmail.com", "daddress": "rajkot" } };
        db.collection('student').updateOne(odata, ndata, function (err, result){
            if(err) throw err;
            console.log("record updated");
        });
    });
}).listen(8080);