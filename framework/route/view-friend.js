var express = require('express');
var jfile = require('../Data/data.json');
var router = express.Router();

router.get('/friends-list', function(req, res){
   var pagefriend = jfile.friends;

   res.render('friends',{
    pageTitle: 'Friends',
    fLdata: pagefriend,
    pageID: 'friends'
});

});

router.get('/friends-list/:friendid', function(req, res){
    var data = req.app.get('jdata');
    var detFriends = [];
    data.friends.forEach(function(item){
        if(item.shortname == req.params.friendid)
        {
            detFriends.push(item);
        }
    });

    res.render('friends',{
        pageTitle: 'Friends Info',
        singlefri: detFriends,
        pageID: 'frienddetails'
    });
    
});

module.exports = router;