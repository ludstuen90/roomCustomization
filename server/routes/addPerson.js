var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var router = express.Router();

if(process.env.DATABASE_URL !== undefined) {
     console.log('env connection string');
     connectionString = process.env.DATABASE_URL;
     pg.defaults.ssl = true;
} else {
    // running locally, use our local database instead
    connectionString = 'postgres://localhost:5432/wearable';
}

router.get('/', function(req, res){
  res.sendFile(path.resolve('public/views/addPerson.html'));
});

router.post('/data', function(req, res){
  console.log(req.body.name, req.body.temperature, req.body.hierarchy);
  pg.connect(connectionString, function(err, client, done){
    client.query("INSERT INTO preferences (name, preftemp, hierarchy) VALUES ($1, $2, $3)", [req.body.name, req.body.temperature, req.body.hierarchy]);
    done();
    pg.end();
  });
  res.sendStatus(200);
});

module.exports = router;
