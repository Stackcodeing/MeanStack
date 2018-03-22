var express = require('express');
var app = express();
var jfile = require('./Data/data.json');

app.get('/', function(req, res){
    var info = '';
    jfile.friends.forEach(function(item){
        info +=`
            <li>
                <h2>${item.name}</h2>
                <h3>${item.office}</h3>
                <p>${item.project}</p>
            </li>
        `;
    });
    res.send(`${info}`);
});

app.listen(8080);