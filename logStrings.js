//7.3 while LOOP EXERCISES

var expect = require('chai').expect;

function logStrings(array) {
    var x = 0;
    while(x < array.length){
        if(typeof array[x] === "string"){
            console.log(array[x]);
        }
        x++;
    }
}

// logStrings(['hello world',1,true, 'yes', false,'empty']);

describe('nextFive', function() {

    try {
      logStrings(['no',1, false, true, 4, 9, 'yes', 'hello']);
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
      logStrings(['no',1, false, true, 4, 9, 'yes', 'hello']);
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('no,yes,hello,')
    })

    it("should log values to the console (2)", function() {
      var originalLogger = console.log;
      var capturedMessage = '';
      console.log = function(message) {
        capturedMessage += message.toString() + ',';
      }
      logStrings([false, 4, 'demon', 'halo', 3, 8, 'covenant']);
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('demon,halo,covenant,')
    })
    it("should use a while loop", function() {
      var body = logStrings.toString();
      expect(/while/.test(body)).to.deep.eq(true);
    })
})