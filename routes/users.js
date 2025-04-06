var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


/* GET users listing. */
router.get('/', function(req, res, next) {
  var allUsers;
MongoClient.connect(url, function(err, db) {   //here db is the client obj
  console.log("attempting to connect to users.");

  db.close();   //close method has also been moved to client obj
});
res.send("Connected to users db.")
  //var allUsers = db.getCollection("users").find({});
});

router.post('/create', function(req, res, next) {
  //res.render('index', { title: 'Centivo Technical Challenge' });
  //res.render('index', { title: 'testing user 3 2 1 POST!' });
  res.send('POST: User resource for Centivo Technical Challenge. /user 3 2 1 POST!');
});

router.put('/update', (req, res) => {
  res.send('PUT: User resource for Centivo Technical Challenge. /user. Todo update a User by ID.')
});

router.delete('/delete', (req, res) => {
  res.send('DELETE: User resource for Centivo Technical Challenge. /user. Todo delete a User by ID.')
});

module.exports = router;
