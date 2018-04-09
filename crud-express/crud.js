var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

// call view template file
app.set('view engine', 'ejs');
app.set('views', 'view');
app.locals.siteTitle = 'CRUD';

// create middleware to access public folder (css, image, js etc...)
app.use(express.static('public'));

// include body-parser in main file
app.use(bodyParser.urlencoded({extended: true}))

// call router file
app.use(require('./router/userlist'));
app.use(require('./router/index'));
app.use(require('./router/addquote'));
app.use(require('./router/editquote'));

app.listen(3000);