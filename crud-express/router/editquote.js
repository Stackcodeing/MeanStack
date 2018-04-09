var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var ObjectId = require('mongodb').ObjectId

router.get('/edit/:id', (req, res) => {
    var o_id = new ObjectId(req.params.id)
    
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err)
        db = client.db('college') // whatever your database name is
        db.collection('dataquote').find({"_id": o_id}).toArray((err, result) => {
            if (err) return console.log(err)
            res.render('editquote',{
                pageTitle: 'Quote Edit',
                equote: result,
                pageID: 'quoteedit'
            })
        })
    })    
})

router.post('/edit/:id', (req, res) => {
    var o_id = new ObjectId(req.params.id)
    
    var user = {
        $set: {
        name: req.body.name,
        quote: req.body.quote
        }
    }

    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err)
        db = client.db('college') // whatever your database name is
        db.collection('dataquote').update({"_id": o_id}, user, (err, result) => {
            if (err) return console.log(err)
            res.redirect('/quotes')
        })
    })    
})

router.get('/delete/:id', (req, res) => {
    var o_id = new ObjectId(req.params.id)
    
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err)
        db = client.db('college') // whatever your database name is
        db.collection('dataquote').remove({"_id": o_id}, (err, result) => {
            if (err) return console.log(err)
            res.redirect('/quotes')
        })
    })    
})

module.exports = router;