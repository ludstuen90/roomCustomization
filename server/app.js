var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var router = express.Router();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

if(process.env.DATABASE_URL !== undefined) {
     console.log('env connection string');
     connectionString = process.env.DATABASE_URL;
     pg.defaults.ssl = true;
} else {
    // running locally, use our local database instead
    connectionString = 'postgres://localhost:5432/wearable';
}



var getAll = function(req, res){
  console.log('request at test received');
  result = [];
  pg.connect(connectionString, function (err, client, done){
    var queryText = ("SELECT * FROM PREFERENCES");
    var query = client.query(queryText);
    query.on('row', function(row){
      result.push(row);
    });
    query.on('end', function() {
      done();
      pg.end();
      return result;
    });
    if (err){
      console.log(err);
    }
  });
};




//Module Inclusion
var calculations = require('./modules/calculations');
var dataBs = require('./modules/getAll');

app.get('/banana', function(req, res){
  console.log(getAll());
  // // var answer = dataBs();
  // var peel = calculations(27);
  // console.log('the answer is ', answer);
  res.sendStatus(200);
});

// Route Inclusion
var home = require('./routes/home');
var databaseConnect = require('./routes/database');
var addPerson = require('./routes/addPerson');
var requests = require('./routes/requests');

// Routes
app.use('/', home);
app.use('/test', databaseConnect);
app.use('/addPerson', addPerson);
app.use('/requests', requests);

//Establish static public folder
app.use(express.static('public'));


//Spin up server
app.listen(3000, function(req, res){
  console.log("Server is up and running on port 3000.");
});
