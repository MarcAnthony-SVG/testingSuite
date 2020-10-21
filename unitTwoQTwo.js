//UNIT 2 ASSESSMENT Q2

var expect = require("chai").expect;

//Write a function, returnsUndefined, that takes no parameters and returns undefined.

function returnUndefined() {
  return undefined;
}

describe("returnUndefined", function () {
  it("Returns undefined.", function () {
    expect(returnUndefined()).to.deep.eq(undefined);
  });
});
