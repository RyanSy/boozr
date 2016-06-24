var express = require('express');
var router = express.Router();
var burger = require('../models/user.js');

router.get('/', function(req,res) {
	res.redirect('/index')
});

router.get('/index', function(req,res) {
	res.render('index')
});

router.post('/index/create', function(req,res) {
	user.create(['email', 'password'], [req.body.email, req.body.password], function(data){
		res.redirect('/index')
	});
});

module.exports = router;
