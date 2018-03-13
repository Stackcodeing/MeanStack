// Node.js: HTTP SERVER Handling GET and POST Request 
// Show HTML Form at GET request.
// At POST Request: Grab form data and display them.
// Get Complete Source Code from Pabbly.com

var http = require('http');
var fs = require('fs');
    
http.createServer(function(req, res) {
    if(req.method === "GET"){
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream("./form.html", "UTF-8").pipe(res);
    } else if(req.method === "POST"){
        var body = "";

        req.on("data", function(chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(body);
        });
    }
}).listen(8080);