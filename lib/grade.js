'use strict';
const nums=require('./nums.js')
const val=require('./val.js')

const KitNumber=require('./number.js')
class EKitNumberGrade extends KitNumber{
    static isValue(value){return value instanceof EKitNumberGrade;}
    constructor( number ){
        super(number,'grade')
        if(this.valid){
            this.grade=this.get('number')+this.suffix;
            this.value=this.get('number');
        }
    }
    get suffix(){
        if(!this.ordinal) return "";
        return this.ordinal;
    }
    test(string){
        return {
            string:string+'',
            $grade:this.grade || false,
            grade:function(){
                if(!this.$grade) return false;
                return (this.string.indexOf(this.$grade)>=0) ? this.$grade:false;
            }
        };
    }

}

module.exports = function(value){return new EKitNumberGrade(value);};
module.exports.Grade=EKitNumberGrade;