// Reading JSON Files Using Node.js
// Generating Right JSON from Routing Using Node.js
// JSON Files: student.json
// Get Complete Source Code from Pabbly.com

var http = require("http");
var staff = require("./Data/staff.json");

var server = http.createServer(function(req, res){
    if(req.url === "/")
    {
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(staff));
    } else if(req.url === "/pabbly.com"){
        var data = staff.filter(function(item){
            return item.project === "pabbly.com";
        });
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data));
    }
    else{
        res.writeHead(400, {"Content-Type": "text/html"});
        res.end("no record found");
    }

});

server.listen(8080);