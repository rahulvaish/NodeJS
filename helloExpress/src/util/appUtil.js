
function checkValue(reqBody){
    if(reqBody.name === 'undefined' || reqBody.city === 'undefined'){
        return false;
    }
    return true;
}

module.exports = {checkValue};