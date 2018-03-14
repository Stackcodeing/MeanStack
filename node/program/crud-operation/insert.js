// Node.js - insert data in to mongodb collection(table)

var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

http.createServer(function(req, res){
    if(req.url === "/form")
    {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./form.html", "UTF-8").pipe(res);
    }

    if(req.method === "POST"){
        var fdata = "";
        req.on("data", function(chunk){
            fdata += chunk;
        });
        req.on("end", function(chunk){
            
            MongoClient.connect(url, function(err, client){
                if(err) throw err;
                var q = querystring.parse(fdata);
                var db = client.db('college');
                db.collection('student').insertOne(q, function(err, res){
                    if(err) throw err;
                    console.log("Data inserted success");
                    db.close();
                });
            });
        });
    }
}).listen(3000);