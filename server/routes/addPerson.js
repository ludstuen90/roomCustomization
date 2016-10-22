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

// router.post('/data', function(req, res){
//   console.log(req.body.name, req.body.temperature, req.body.hierarchy);
//   pg.connect(connectionString, function(err, client, done){
//     client.query('INSERT INTO preferences (hierarchy) VALUES ($1)', [req.body.hierarchy]);
//     done();
//     pg.end();
//   });
//   res.sendStatus(200);
// });


router.post('/data', function(req, res){
  console.log('Request received in add Insurer');
console.log(req.body.name, req.body.temperature, req.body.hierarchy);
  pg.connect(connectionString, function(err, client, done){
    client.query ('INSERT INTO preferences (temperature) VALUES ($1)', [req.body.temperature]);
    done();
    pg.end();
  });
  res.sendStatus(200);
});





router.get('/receive', function(req, res){
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
      return res.json(result);
    });
    if (err){
      console.log(err);
    }
  });
});

module.exports = router;
