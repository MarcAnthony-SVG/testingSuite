//UNIT 4 ASSESSMENT TEST

var expect = require("chai").expect;

//Write a function that takes two arguments, both arrays. The function returns an object with one property. The object's key is "combinedArrays"
//and the value is the two arrays concatenated together.

function combineTwoArrays(arr1, arr2) {
  var result = {
    combinedArrays: [],
  };
  var holder = arr1.concat(arr2);
  result.combinedArrays = holder;
  return result;
  //>>>>Alternative Solution<<<<
  // var holder = [];
  // for(let i = 0; i < arr1.length; i++){
  //     holder.push(arr1[i])
  // }
  // for(let j = 0; j < arr2.length; j++) {
  //     holder.push(arr2[j])
  // }
  // result.combinedArrays = holder;
  // return result
}

describe("combineTwoArrays", function () {
  it("Combines the two input arrays (1).", function () {
    expect(combineTwoArrays([1, 2, 3], [4, 5])).to.deep.eq({
      combinedArrays: [1, 2, 3, 4, 5],
    });
  });
  it("Combines the two input arrays (2).", function () {
    expect(combineTwoArrays(["c", 4], ["pi", 5, "d"])).to.deep.eq({
      combinedArrays: ["c", 4, "pi", 5, "d"],
    });
  });
});
