//UNIT 3 ASSESSMENT CODING CHALLENGE

var expect = require('chai').expect;

//A restaurant’s review positivity score is the number of positive reviews minus the number of negative reviews.
//Given an object containing the number of positive and negative 
//reviews, for example { positive: 24, negative: 8 }, return the review positivity 
//score. In the example, the score would be 24 - 8 = 16, so the function should return 16.

function getReviewPositivityScore (obj) {
    if(obj.positive < obj.negative){
        return 0
    } 
    else {
        console.log(obj.negative)
        return obj.positive - obj.negative
    }
}

// getReviewPositivityScore({
//     positive: 24,
//     negative: 8
// })

describe('GetReviewPositivityScore', function() {

    it("returns positive review score when positive is greater than negative (1)", function() {
      expect(getReviewPositivityScore({positive: 24, negative: 8})).to.deep.eq(16);
    })
    it("returns positive review score when positive is greater than negative  (2)", function() {
      expect(getReviewPositivityScore({positive: 12, negative: 10})).to.deep.eq(2);
    })
    it("returns 0 when condition is not met", function() {
      expect(getReviewPositivityScore({positive: 6, negative: 8})).to.deep.eq(0);
    })

})
