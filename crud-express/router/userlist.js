var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

router.get('/quotes', (req, res) => {
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err)
        db = client.db('college') // whatever your database name is
        db.collection('dataquote').find().toArray((err, result) => {
            if (err) return console.log(err)
            res.render('user-list',{
                pageTitle: 'Quote List',
                lquote: result,
                pageID: 'quotelist'
            })
        })
    })    
})

module.exports = router;