var express = require('express');
var jfile = require('../Data/data.json');
var router = express.Router();

router.get('/friends', function(req, res){
    var info = '';
    jfile.friends.forEach(function(item){
        info +=`
            <li>
                <h2>${item.name}</h2>
                <img class="fimg" src="/images/friend/${item.shortname}.jpg" alt="banner" />
                <h3>${item.office}</h3>
                <p>${item.project}</p>
            </li>
        `;
    });
    res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    ${info}
    <script src="/reload/reload.js"></script>
    `);
});

router.get('/friends/:friendid', function(req, res){
   var friend = jfile.friends[req.params.friendid];
    res.send(`
        <link rel="stylesheet" type="text/css" href="/css/style.css">
        <h2>${friend.name}</h2>
        <img class="fimg" src="/images/friend/${friend.shortname}.jpg" alt="banner" />
        <h3>${friend.office}</h3>
        <p>${friend.project}</p>
        <script src="/reload/reload.js"></script>
    `);
});

module.exports = router;