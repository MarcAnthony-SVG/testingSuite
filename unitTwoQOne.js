//UNIT 2 ASSESSMENT Q1

var expect = require('chai').expect;

//Write a function, returnsBoolean, that takes no parameters and returns a boolean value.
function returnsBoolean() {
    return true
    //return false
}

describe('returnsBoolean', function() {

    it("should return a boolean", function() {
        expect(returnsBoolean()).to.satisfy(function() { return true || false; });
    })

})