//UNIT 2 Q3

var expect = require("chai").expect;

//Write a function, checkAvailability, that accepts a string, person, a boolean, isAvailable, and a number, phoneNumber.
//The function returns a string that states whether or not the person is available. If they are available, it also states their phone number.
//Here are some example invocations.
//checkAvailability(“Juan”, false, 2015551234) returns “Juan is not available.”
//checkAvailiability(“Lucy”, true, 2015554321) returns “Lucy is available at 2015554321.”

function checkAvailability(person, isAvailable, phoneNumber) {
  if (isAvailable === true) {
    return `${person} is available at ${phoneNumber}.`;
  } else {
    return `${person} is not available.`;
  }
}

describe("checkAvailablility", function () {
  it("Returns whether they are available or not (1).", function () {
    expect(checkAvailability("Tony", true, 1234567890)).to.deep.eq(
      "Tony is available at 1234567890."
    );
  });

  it("Returns whether they are available or not (2).", function () {
    expect(checkAvailability("Macy", false, 1234567890)).to.deep.eq(
      "Macy is not available."
    );
  });
});
