// UNIT 7 ASSESSMENT TEST

var expect = require('chai').expect;

//Write a function that takes two parameters, an array and an object. The function should log each element of the array to the console, in order, 
//then log each of the object's values to the console. 

function logArrAndObj(arr, obj) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    for(key in obj){
        console.log(obj[key])
    }
}
logArrAndObj([1,2,3], {time : "Noon", value : 5})

describe('logArrAndObj', function() {

    try {
      logArrAndObj(['yes', 'no', 'hello'], {value : 3, place : 10});
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
      logArrAndObj(['yes', 'no', 'hello'], {value : 1, place : 0});
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('yes,no,hello,1,0,')
    })

    it("should log values to the console (2)", function() {
      var originalLogger = console.log;
      var capturedMessage = '';
      console.log = function(message) {
        capturedMessage += message.toString() + ',';
      }
      logArrAndObj(['a', 'dog', 'car'], {value : 61, place : 333});
      console.log = originalLogger;
      expect(capturedMessage).to.deep.eq('a,dog,car,61,333,')
    })
    it("should use a for loop", function() {
      var body = logArrAndObj.toString();
      expect(/for/.test(body)).to.deep.eq(true);
    })
})