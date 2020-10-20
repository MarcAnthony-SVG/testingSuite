var nextFive = require('nextFive.js');
var expect = require('chai').expect;

// var assert = require('assert');
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

describe('nextFive()', function() {
    context('without arguments', function() {
        it('should console num and next 5 numbers', function() {
          expect(nextFive()).to.equal(0)
        })
      })
})
