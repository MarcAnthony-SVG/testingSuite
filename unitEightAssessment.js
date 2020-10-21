var expect = require('chai').expect;

// Write a function that takes one parameter, an array of numbers. The function should return an object with three keys, lessThanTen, equalToTen, and greaterThanTen.
// The values should represent the number of elements from the array that are less than, equal to, or greater than ten respectively.

function objTen(arr) {
    var result = {
        lessThanTen : 0,
        equalToTen : 0,
        greaterThanTen : 0
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 10) {
            result.lessThanTen++
        } 
        else if(arr[i] === 10){
            result.equalToTen++
        } else {
            result.greaterThanTen++
        }
    }
    return result
}

describe('objTen', function() {

    it("returns object with respective values (1)", function() {
      expect(objTen([1, 15, 10, 10, 10, 3])).to.deep.eq({ lessThanTen : 2, equalToTen : 3, greaterThanTen : 1});
    })
    it("returns object with respective values (2)", function() {
        expect(objTen([23, 5, 0, 10, 90, 35,10])).to.deep.eq({ lessThanTen : 2, equalToTen : 2, greaterThanTen : 3});
      })
    it("returns object with respective values (3)", function() {
        expect(objTen([67, 10, 5, 469, 10, 3, 5])).to.deep.eq({ lessThanTen : 3, equalToTen : 2, greaterThanTen : 2});
      })
})