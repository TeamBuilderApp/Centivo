var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'GET index for Centivo Technical Challenge' });
});

module.exports = router;
