const repeatString = function(name, count) {
    if (count == 0){
        return "";
    } else if (count < 0){
        return "ERROR";
    }
    let thestr = ""
    for(let i = 0; i <count; i++ ){
        thestr += name
    }
    return thestr;
};



// Do not edit below this line
module.exports = repeatString;
