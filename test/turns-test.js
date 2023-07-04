const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turns');

describe('turns', function() {
  it('should evaulate if a guess is correct or incorrect', function() {
    const correctGuess = evaluateGuess('right answer', 'right answer')
    const wrongGuess = evaluateGuess('right answer', 'wrong answer')
    
    expect(correctGuess).to.equal('Correct!')
    expect(wrongGuess).to.equal('Incorrect!')

  })
});  
