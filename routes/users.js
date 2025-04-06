var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('GET user resource for Centivo Technical Challenge /users list.');
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
