var express = require('express');
var router = express.Router();


ctrlothers=require('../controller/others');

router.get('/login',ctrlothers.login);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about',ctrlothers.about);
router.get('/home',ctrlothers.home);

router.get('/destination',ctrlothers.destination);
router.get('/blog',ctrlothers.blog);
router.get('/contact',ctrlothers.contact);

module.exports = router;
