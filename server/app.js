var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req,res){
  res.sendFile(path.resolve('public/views/index.html'));
});

app.use(express.static('public'));

app.listen(3000, function(req, res){
  console.log("we are the resistance");
});
