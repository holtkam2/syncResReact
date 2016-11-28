const router = require('express').Router();
var bodyParser = require('body-parser');
var request = require('request');

router.get('/');

// now it should make an API call to Zillow to get current mortgage rates
// ZWSID: X1-ZWz19gzbncr40b_4srxq
router.get('/api/rates', function (req, res){
  var ratesObj;
  request('http://www.zillow.com/webservice/GetRateSummary.htm?zws-id=X1-ZWz19gzbncr40b_4srxq&output=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // body is a JSON object that contains rate information
      res.status(200).json(body);
    }
  })
})

router.post('/api/state', function(req, res){
  console.log("request handler was given this information:");
  console.log(req.body);
});

module.exports = router;