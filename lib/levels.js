'use strict';

const nums = require('./nums.js')
const grade = require('./grade.js')

const levels = [
    {
        key:'K',
        name:'Kindergarten',
        number:false,
        value:'K',
        test:function(s){
            s=s+'';

            return {
                string:s.toLowerCase(),
                $grade:'K',
                grade:function(){
                    if(this.string.indexOf('kindergarten') >=0 ) return true;
                    else if(this.string.indexOf('k ')>=0) return true;
                    else if(this.string.indexOf(' k')>=0) return true;
                    else if(this.string.indexOf(' k ')>=0) return true;
                    return false;
                }
            };
        }
    }
]
const LevelsRange = nums.range(1,12)
for(let i of LevelsRange){ levels.push(grade(i)); }

class EKitGradeLevels extends Map{
    constructor(){
        super(levels.map((n)=>{
            return [n.value+'',n];
        }))
    }
    get(key){ return super.get(key+'');}
    has(key){return super.has(key+'');}
    find(query){
        var o = [];
        if(typeof query === 'object' && query !== null){
           for(let key in query){
               for(let v of this){
                   switch (key){
                       case 'grade':
                           if(query[key] === v.grade) o.push(v)
                           break;
                       default:
                           if(query[key]===v.get(this)) o.push(v);
                           break;
                   }
               }
           }
        }
        return o;
    }
    match(string){
        for(let n of this){
            console.log(n);
            let g = n[1];
            let t = g.test(string).grade();
            if(t === false){}
            else{
                return g;
            }
        }
        return false;
    }
}

module.exports=function(){return levels;};
module.exports.Levels=EKitGradeLevels;

