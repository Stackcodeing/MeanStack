// Node.js: HTTP SERVER Handling GET and POST Request 
// Show HTML Form at GET request.
// At POST Request: Grab form data and display them.
// Get Complete Source Code from Pabbly.com

var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var url = require('url');

http.createServer(function(req, res) {
    if(req.url === "/form")
    {
        res.writeHead(200, {"Content-Type":"text/html"});
        fs.createReadStream("./form.html", "UTF-8").pipe(res);
    }
    if(req.method === "GET")
    {
        var q = url.parse(req.url, true).query;
        console.log(q);
        
    } else if(req.method === "POST") {
        var fdata = "";

        req.on("data", function(chunk) {
            fdata += chunk;
        });

        req.on("end", function(){
            var formdata = querystring.parse(fdata);
            console.log(formdata);
        });
    }

}).listen(8080);