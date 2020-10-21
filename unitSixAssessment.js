//UNIT 6 ASSESSMENT TEST

var expect = require('chai').expect;

//Write a function, sameParity, that takes two numbers. If both numbers are even or both numbers are odd, the function should return true. 
//Otherwise, it should return false. Use at least one logical operator in your code.

function sameParity(num1, num2) {
    // if((num1 % 2 === 0 && num2 % 2 === 0) || (num1 % 2 === 1 && num2 % 2 === 1)){
    //     return true
    // }
    // return false;
    return (num1 % 2 === 0 && num2 % 2 === 0) || (num1 % 2 === 1 && num2 % 2 === 1) ? true : false
}

// console.log(sameParity(1,1))

describe('sameParity', function() {

    it("should return true if both numbers are even or odd", function() {
        expect(sameParity(3,3)).to.be.true;
    })
    it("should return true if both numbers are even or odd", function() {
        expect(sameParity(6,12)).to.be.true;
    })
    it("should return false if both numbers are not even or odd", function() {
        expect(sameParity(6,1)).to.be.false;
    })
})