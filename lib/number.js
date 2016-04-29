'use strict';
const nums=require('./nums.js')
const val=require('./val.js')
const ordinal = require('ord')
class EKitNumber extends Map {
    static isValue(value) {
        return value instanceof EKitNumber;
    }
    constructor(number,name) {
        if(typeof name !== 'string') name='number'
        var n = [];
        if (val(number)) number = nums(number)
        if (nums.isValue(number)) n = number.mapped()
        super(n)
        this.set('kitname',name)

    }
    get valid(){ return this.get('valid') || false; }
    get cardinal(){
        if(this.valid) return this.get('number');
        return false;
    }
    get ordinal(){
        if(this.valid) return ordinal(this.get('number'));
        return false;
    }
}

module.exports = EKitNumber;