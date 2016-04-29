'use strict';

const val = require('./val.js')
const nums = require('./nums.js')
const grade=require('./grade.js')
const levels=require('./levels.js')
const Grades = {
    make:function(v){return grade(v); },
    get list(){ return levels(); },
    get levels(){ return new levels.Levels(); }
};


const kitNumber = function(value){ return nums(value); };
module.exports = kitNumber;
module.exports.Number=nums.Number;
module.exports.Range=nums.Range;
module.exports.Grade=grade.Grade;
module.exports.grade=Grades;
module.exports.value=val;
module.exports.toNumber=val.toNumber;
module.exports.range=function(a,b){return nums.range(a,b); }