var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

router.get('/add-quote', (req, res) => {
    res.render('addquote',{
        pageTitle: 'Add Quote', 
        pageID: 'addquote'
    })
})

router.post('/save-quote', (req, res) => {
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err)
        db = client.db('college') // whatever your database name is
        db.collection('dataquote').save(req.body, (err, result) => {
            if (err) return console.log(err)
            res.redirect('/quotes')
        })
    })
})

module.exports = router;