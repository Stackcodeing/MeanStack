var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var data = req.app.get('jdata');
    var pageFriends = data.friends;
    
    // render template file
    res.render('index',{
        pageTitle: 'Home',
        homefri: pageFriends,
        pageID: 'home'
    });

    // call css,js,image
    // res.send(`
    // <script src="/reload/reload.js"></script>
    // <link rel="stylesheet" type="text/css" href="/css/style.css">
    // <h1>Welcome To Website</h1>
    // <img src="/images/misc/catalog.jpg" alt="banner" />
    
    // `);
});

module.exports = router;