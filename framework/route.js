var express = require('express');
var reload = require('reload');
var app = express();
var jfile = require('./Data/data.json');

// call view template file 
app.set('jdata',jfile);
app.set('view engine', 'ejs');
app.set('views', 'view');
app.locals.siteTitle = 'CSgeeks';
app.locals.allfriend = jfile.friends;
// create middleware to access public folder (css, image, js etc...)
app.use(express.static('public'));

// Call seprate router file in main js file
app.use(require('./route/index'));
app.use(require('./route/friend'));
app.use(require('./route/view-friend'));
app.use(require('./route/feedback'));
app.use(require('./route/api'));

// Routing in single file

// app.get('/', function(req, res){
   
//     res.send(`<h1>Welcome to Website</h1>`);
// });

// app.get('/friends', function(req, res){
//     var info = '';
//     jfile.friends.forEach(function(item){
//         info +=`
//             <li>
//                 <h2>${item.name}</h2>
//                 <h3>${item.office}</h3>
//                 <p>${item.project}</p>
//             </li>
//         `;
//     });
//     res.send(`${info}`);
// });

// app.get('/friends/:friendid', function(req, res){
//    var friend = jfile.friends[req.params.friendid];
//     res.send(`
//         <h2>${friend.name}</h2>
//         <h3>${friend.office}</h3>
//         <p>${friend.project}</p>
//     `);
// });

app.listen(8080);

reload(app);