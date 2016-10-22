var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var router = express.Router();


router.post('/data', function(req,res){
  console.log(req.body);
  console.log('new hit received');
  console.log('the strength is ', req.body.strength);
  console.log('the id is ', req.body.id);
  if (req.body.id == 'new message') {
    console.log('puppies');
  } else {
    console.log('no puppies');
  }
  res.sendStatus(200);
});

module.exports = router;
