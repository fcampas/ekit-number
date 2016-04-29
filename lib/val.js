'use strict';

const NUMERICAL=/^\d+$/;


function isNumber(value){ return (typeof value === "number" && value !== Infinity && value !== NaN);}
function isNumerical(value){
    value=value+'';
    return value.test(NUMERICAL);
}
function toNum(v){
    var n = -1
    if(isNumber(v)){n=v;}
    else if(isNumerical(v)){n=parseInt(v);}
    else if(typeof v === 'string' ){ n = parseInt(string); }
    return n;
}


module.exports = isNumber;
module.exports.numerical=isNumerical;
module.exports.toNumber=toNum;
module.exports.number=function(v){
    let n = toNum(v);
    if(isNumber(n)) return n;
    return -1;
};