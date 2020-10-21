//7.3 while LOOP EXERCISES

var expect = require("chai").expect;
require("mocha-sinon");
// Write a function that takes one parameter, a number. The function logs the given number and the next 5 numbers to the console. The function does not return anything. Use a
// while loop.
function nextFive(num) {
  var counter = num;
  while (num <= counter + 5) {
    console.log(num);
    num++;
  }
}

describe("nextFive", function () {
  try {
    nextFive(2);
  } catch (error) {
    console.log(error);
    return;
  }

  it("Should log values to the console (1).", function () {
    var originalLogger = console.log;
    var capturedMessage = "";
    console.log = function (message) {
      capturedMessage += message.toString() + ",";
    };
    nextFive(2);
    console.log = originalLogger;
    expect(capturedMessage).to.deep.eq("2,3,4,5,6,7,");
  });

  it("Should log values to the console (2).", function () {
    var originalLogger = console.log;
    var capturedMessage = "";
    console.log = function (message) {
      capturedMessage += message.toString() + ",";
    };
    nextFive(7);
    console.log = originalLogger;
    expect(capturedMessage).to.deep.eq("7,8,9,10,11,12,");
  });
  it("Should use a while loop", function () {
    var body = nextFive.toString();
    expect(/while/.test(body)).to.deep.eq(true);
  });
});
