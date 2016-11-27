const router = require('express').Router();
var bodyParser = require('body-parser');

router.get('/');

router.post('/api/state', function(req, res){
  console.log("request handler");
  console.log(req.body);
});

module.exports = router;