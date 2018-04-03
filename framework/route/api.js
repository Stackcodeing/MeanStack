var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var feedbackData = require('../Data/feedback.json');


router.get('/api', function(req, res){
    res.json(feedbackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.post('/api', function(req, res){
    feedbackData.unshift(req.body);
    fs.writeFile('Data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err){
        console.log(err);
    });
    res.json(feedbackData);
});

router.delete('/api/:id', function(req, res){
    feedbackData.splice(req.params.id, 1);
    fs.writeFile('Data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err){
        console.log(err);
    });
    res.json(feedbackData);
});

module.exports = router;