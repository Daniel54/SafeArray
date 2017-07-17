'use strict';

class SafeArray
{
    constructor(){
        this.inArray = [];
        //this.makeArray();
    }

    length(){
        console.log('array length: ', this.size);
    }

    /*
    makeArray(){
        console.log('loading array....');
        for(let i = 1; i < this.size; i++){
            this.inArray.push(i);
        }
    }
    */

    putIn(inVal) {
        this.inArray.push(inVal);
    }


}

SafeArray.prototype.showItems = function(){
    console.log('from prototype');
    this.inArray.forEach(el => console.log(el));
};

SafeArray.prototype.size = function(){
    console.log(this.inArray.size);
}

let arr = new SafeArray(8);


console.log('Safe Array Object arr: ', arr);
arr.putIn(2);
arr.putIn(2);
arr.putIn(7);
arr.putIn(6);




