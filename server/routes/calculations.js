var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var router = express.Router();


// Ideally this should happen every 60,000 for one minute.
setInterval(function() {
  var now = new Date();
  console.log('Five seconds have passed', now);

}, 5000);

module.exports = router;
