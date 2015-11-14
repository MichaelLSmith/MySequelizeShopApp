var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	models.Users.findAll().then(function(users){
		res.json({
			users:users
		});
	});
});

router.get('/:userId',function(req,res){
	models.Users.findAll({
		where: {
		    id: req.params.userId,
		  }
     }).then(function(user){
     	res.json({
     		user:user
     	});
     });
});

router.post('admin_login', function (req,res){
    console.log('POST /login request');

    console.log('request: '+req);
    console.log('response: '+res);

    //checks to see if user exists in db.
    //if user exists, it will send back an auth token.
    //if user doesn't exists a message will be output saying
    //can't find user.

    var adminCheck_obj = {}; 
})

router.post('/createDummyUser',function(req,res){
	var user_obj = {
		email:'r2@shop.ca',
		password:'123'
	}

	models.Users.create(user_obj).then(function(users){
		res.json({
			users:users
		});
	});
})

module.exports = router;