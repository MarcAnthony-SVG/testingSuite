var expect = require('chai').expect;

function nextFiveMultiples(num){
    var orgNum = num;
    var counter = num * 6;
    while(num <= counter){
        console.log(num);
        num += orgNum
    }
}

// nextFiveMultiples(3);

describe('nextFive', function() {

    try {
      nextFiveMultiples(2);
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
      nextFiveMultiples(2);
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('2,4,6,8,10,12,')
    })

    it("should log values to the console (2)", function() {
      var originalLogger = console.log;
      var capturedMessage = '';
      console.log = function(message) {
        capturedMessage += message.toString() + ',';
      }
      nextFiveMultiples(7);
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('7,14,21,28,35,42,')
    })
    it("should use a while loop", function() {
      var body = nextFiveMultiples.toString();
      expect(/while/.test(body)).to.deep.eq(true);
    })
})