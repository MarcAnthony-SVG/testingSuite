var expect = require('chai').expect;

//Write a function that takes in a string and logs every character in a string and its index, separated by a space.
function logEveryChar(str) {
	for(var i = 0; i < str.length; i++){
        console.log(`${str[i]} ${i}`)
    }
}
//logEveryChar('hello');

describe('logEveryChar', function() {

    try {
      logEveryChar('hello');
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
      logEveryChar('hello');
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('h 0,e 1,l 2,l 3,o 4,')
    })

    it("should log values to the console (2)", function() {
      var originalLogger = console.log;
      var capturedMessage = '';
      console.log = function(message) {
        capturedMessage += message.toString() + ',';
      }
      logEveryChar('yes');
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('y 0,e 1,s 2,')
    })
    it("should use a for loop", function() {
      var body = logEveryChar.toString();
      expect(/for/.test(body)).to.deep.eq(true);
    })
})