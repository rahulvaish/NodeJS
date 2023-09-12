var express = require('express');
var appService = require('../service/appService');
var router = express.Router();


router.get('/getendpoint', function(req, res){
   res.send('GET route on things.');
});

router.post('/postendpoint', function(req, res){
  appService.processService(req, res);
});

router.post('/calulate/divide', function(req, res){
  appService.calculateDiv(req, res);
});


var app = express();
app.use(function(req, res, next){
  console.log("Start");
  next();
});


app.get('/', function(req, res, next){
  res.send("Middle");
  next();
});

module.exports = router;