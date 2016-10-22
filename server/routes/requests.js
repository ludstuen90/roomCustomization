var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var router = express.Router();


router.all('/', function(req,res){
  console.log('hit received');
  console.log(req);
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;
