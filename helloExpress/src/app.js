var express = require('express'); 
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const controller = require('./controller/appController.js');
app.use('/controller', controller);


app.use(function(req, res, next){
    console.log("Start");
    next();
});

app.listen(3000);