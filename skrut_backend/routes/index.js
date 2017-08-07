/* GET home page. */
var express = require('express');
var router = express.Router();

var db = require('../public/javascripts/queries');


router.get('/api/comments', db.getAllComments);
router.post('/api/comments', db.createComment);
router.post('/api/captcha', db.captchaVerification);

module.exports = router;
