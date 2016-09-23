////////    NODE MODULES    ////////
var express = require('express');
var router  = express.Router();
var request = require('request');


var httpRequestOptions = {
  // CHANGE this line to API endpoint
  url: process.env.POST_TO_ADDRESS,
  json: true
};

router.post('/', function(req, res){
  httpRequestOptions.body = {status: req.body};
  console.log('Sending ', req.body);
  request.post(httpRequestOptions, function(error, response, body){
    console.log("response: ", body);
  })
})


module.exports = router;
