'use strict';
const val = require('./val.js')
const Index = [0,1,2,3,4,5,6,7,8,9];
const Names = ['zero','one','two','three','four','five','six','seven','eight','nine']


const Other = {
    0:{ root:true },
    11:{ name:'eleven'  },
    12:{ name: 'twelve' }
}
const Teens = [13,14,15,16,17,18,19]
const TeenNames = ['thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']

const Tens = [10,20,30,40,50,60,70,80,90]
const TenNames = ['ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']

const Lengths={
    1:{
        name:'ones',
        value:1
    },
    2:{
        name:'tens',
        value:10,
    },
    3:{
        name:'hundred',
        value:100
    },
    4:{
        name:'thousand',
        value:1000
    },
    5:{
        name:'thousand',
        value:1000
    },
    6:{
        name:'thousand',
        value:1000
    },
    7:{
        name:'million',
        value:100000
    }
};

function getLength( value ){
    try{
        let string=value+'';
        let l = string.length;
        if(l.length > 7 && l.length < 10){return Lengths[7];}
        if(Lengths[l]) return Lengths[l];
    }catch(e){}
    return {
        name:'out-of-range',
        value:-1
    };
}

function getValue(value){
    var v = {};
    v.valid=val(value)
    if(v.valid){
        v.number=value;
        let index = Index.indexOf(value)
        let o = Other[value];
        if(index >=0 ){
            v.index=index;
            v.ones=true;
            v.name=Names[v.index];
        }
        if(o){ Object.assign(v,o); }
        v.string=value+'';
        v.length=v.string.length;
        if(value < 0){v.negative=true;}
        else if(value >= 0){v.positive=true;}
        if(Teens.indexOf(value)>=0){
            v.teens=true;
            v.name=TeenNames[Teens.indexOf(value)];
        }else if(Tens.indexOf(value)>=0){
            v.tens=true;
            v.name=TenNames[Tens.indexOf(value)];
        }
        v.type=getLength(value);

    }
    return v;

}

class ENumber{
    constructor(value){
        let v=getValue(value);
        Object.assign(this,v);
    }
    mapped(){
        return Object.keys(this).map((key)=>{
            if(typeof this[key] !== 'function'){
                return [key,this[key]];
            }
            return null;
        }).filter((v)=>{
            if(v === null) return false;
            return true;
        });
    }
}

function getRange(a,b){
    var o = [];
    for(var i=a;i<=b;i++){
        o.push(new ENumber(i));
    }
    return o;
}

class ENumberRange extends Set{
    constructor(from,to){
        from=!val(from) ? 1:from;
        to=!val(to) ? 100:to;
        super(getRange(from,to))
        this.from=from;
        this.to=to;
        this.pair=[from,to]

    }
}
module.exports = function(value){return new ENumber(value); };
module.exports.Number=ENumber;
module.exports.Range=ENumberRange;
module.exports.isValue=function(value){return value instanceof ENumber;};
module.exports.range=function(from,to){ return new ENumberRange(from,to); }