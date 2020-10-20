var expect = require('chai').expect;
require('mocha-sinon');
// Write a function that takes one parameter, a number. The function logs the given number and the next 5 numbers to the console. The function does not return anything. Use a
// while loop.
function nextFive(num){
    var counter = num
    while(num <= counter + 5){
        console.log(num);
        num ++
    }
}
//nextFive(5);

// describe('nextFive()', function() {
//     context('With arguments', function() {
//         beforeEach(function(){
//             this.sinon.stub(console, 'log');
//         })
//         it('Should log num and the next 5 numbers', function() {
//           nextFive(5)
//           expect(console.log.callCount(spy, 6) ).to.be.true
//           expect(console.log.calledWith('5','6','7','8','9','10')).to.be.true
//         })
//       })
// })

describe('nextFive', function() {

    try {
      nextFive(2);
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
      nextFive(2);
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('2,3,4,5,6,7,')
    })

    it("should log values to the console (2)", function() {
      var originalLogger = console.log;
      var capturedMessage = '';
      console.log = function(message) {
        capturedMessage += message.toString() + ',';
      }
      nextFive(7);
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('7,8,9,10,11,12,')
    })
    it("should use a while loop", function() {
      var body = nextFive.toString();
      expect(/while/.test(body)).to.deep.eq(true);
    })
})