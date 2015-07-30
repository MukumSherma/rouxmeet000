var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ROuxmeet' });
});

router.get('/speakers', function(req, res, next) {
  res.render('speakers', { title: 'ROuxmeet' }); //speakers.ejs file is inside 'views' folder
});

module.exports = router;
