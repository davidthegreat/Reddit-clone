var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res, next){
  var messages = req.flash('error');
  res.render('signup', {
  	csrfToken: req.csrfToken(),
  	title: 'Cupcakelicious',
  	messages: messages,
  	hasErrors: messages.length > 0 });
});

router.post('/signup', passport.authenticate('local.signup',{
  successRedirect: '/',
  failureRedirect: '/users/signup',
  failureFlash: true
}));

router.get('/signin', function(req, res, next){
  var messages = req.flash('error');
  res.render('signin', {
    csrfToken: req.csrfToken(),
    title: 'Reddit',
    messages: messages,
    hasErrors: messages.length > 0 });
});

router.post('/signin', passport.authenticate('local.signin', {
  successRedirect: '/',
  failureRedirect: '/users/signin',
  failureFlash: true
}))

module.exports = router;
