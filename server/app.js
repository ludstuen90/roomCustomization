var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var router = express.Router();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Route Inclusion
var home = require('./routes/home');
var databaseConnect = require('./routes/database');
var addPerson = require('./routes/addPerson');

// Routes
app.use('/', home);
app.use('/test', databaseConnect);
app.use('/addPerson', addPerson);

//Establish static public folder
app.use(express.static('public'));

//Spin up server
app.listen(3000, function(req, res){
  console.log("Server is up and running on port 3000.");
});
