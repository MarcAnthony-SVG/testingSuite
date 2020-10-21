//7.10 APPLICATIONS OF for LOOPS

var expect = require("chai").expect;

//Write a function that logs numbers from 2 to 50, counting by 8’s.
function countByEights() {
  for (var i = 2; i <= 50; i += 8) {
    console.log(i);
  }
}

describe("countByEights", function () {
  try {
    countByEights();
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
    countByEights();
    console.log = originalLogger;
    expect(capturedMessage).to.deep.eq("2,10,18,26,34,42,50,");
  });
  it("Should use a for loop.", function () {
    var body = countByEights.toString();
    expect(/for/.test(body)).to.deep.eq(true);
  });
});
