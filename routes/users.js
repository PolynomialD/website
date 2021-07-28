var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'The Users Page' });
});

router.get('/bob', function(req, res, next) {
  res.send('bob');
});

module.exports = router;
