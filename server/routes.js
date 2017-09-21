const router = require('express').Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var files = [];
var path = require('path');
var appDir = path.dirname(require.main.filename);
var request = require('request');


router.get('/');


// this makes the call to the syncRes api to get the list of images and send it back to the client
router.get('/imageList', function(req, res){

	var cache = req.query.cache
	var deleteParam = req.query.delete
	var user = req.query.user
	var email = req.query.email
	var loc = req.query.loc
	var live = req.query.live
	var template = req.query.template
	var ct_service = req.query.ct_service

	var data = {
		"cache":cache,
		"delete":deleteParam,
		"user":user,
		"email":email,
		"loc":loc,
		"live":live,
		"template":template,
		"ct_service":ct_service
	}

	function encodeQueryData(data) {
	   let ret = [];
	   for (let d in data)
	     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
	   return ret.join('&');
	}

	var queryURL = "http://ai.dotomi.com/syncresonline/inc/SyncRes.php?" + encodeQueryData(data)

	request({
	    url: queryURL,
	    method: "GET",
	}, function (error, response, body){
	    res.send(JSON.parse(body));
	});
	 
})


// this is to get the logo and favicon. The file locations are hardcoded at the moment.
router.get('/images/ConversantLogo.svg', function(req, res){
	res.sendFile('/Users/jholtkamp/Desktop/jasons-app/bower_components/clarity-ui/dist/images/ConversantLogo.svg')
})

router.get('/favicon.ico', function(req, res){
	res.sendFile('/Users/jholtkamp/Desktop/jasons-app/bower_components/clarity-ui/dist/images/favicon.ico')
})


module.exports = router;
