var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Reddit' });
});

router.get('/new-post', function(req, res, next) {
  res.render('new', {title: 'Reddit'});
})

module.exports = router;
