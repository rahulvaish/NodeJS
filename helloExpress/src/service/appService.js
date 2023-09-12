var appUtil = require('../util/appUtil.js');

function processService(req, res){
    if(appUtil.checkValue(req.body)) {
        res.send('POST route on things.'); //+ { message: `User ${name} with email ${city} created successfully!` });
    }else{
    res.send('Please re-check the input');
    }
}

function calculateDiv(req, res){
    try {
        console.log("<<<"+req.body.firstNuber);
        console.log("<<<"+req.body.secondNumber);
        var val = Number(req.body.firstNuber)/Number(req.body.secondNumber);
        console.log(val)
        res.send("val" + val);
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
      
}

module.exports = {processService, calculateDiv}