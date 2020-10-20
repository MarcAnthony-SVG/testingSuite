var expect = require('chai').expect;

//Write a function that logs each character in an array of strings along with its index in the array and index in the string, separated by spaces.

function logArrayOfStringsByChar (arr) {
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            console.log(`${arr[i][j]} ${i} ${j}`)
        }
    }
}

logArrayOfStringsByChar(['yes', 'no', 'hello'])

describe('logArrayOfStingsByChar', function() {

    try {
      logArrayOfStringsByChar(['yes', 'no', 'hello']);
    }
    catch (error) {
      console.log(error);
      return;
    }

    it("should log values to the console (1)", function() {
      var originalLogger = console.log;
      var capturedMessage = '';
      console.log = function(message) {
        capturedMessage += message.toString() + ',';
      }
      logArrayOfStringsByChar(['yes', 'no', 'hello']);
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('y 0 0,e 0 1,s 0 2,n 1 0,o 1 1,h 2 0,e 2 1,l 2 2,l 2 3,o 2 4,')
    })

    it("should log values to the console (2)", function() {
      var originalLogger = console.log;
      var capturedMessage = '';
      console.log = function(message) {
        capturedMessage += message.toString() + ',';
      }
      logArrayOfStringsByChar(['a', 'dog', 'car']);
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('a 0 0,d 1 0,o 1 1,g 1 2,c 2 0,a 2 1,r 2 2,')
    })
    it("should use a for loop", function() {
      var body = logArrayOfStringsByChar.toString();
      expect(/for/.test(body)).to.deep.eq(true);
    })
})