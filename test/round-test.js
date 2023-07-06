const chai = require('chai');
const expect = chai.expect;

// const { createRound } = require('../src/round');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { createDeck } = require('../src/deck');
const { createCard } = require('../src/card');

describe('create round', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = createDeck([card1, card2, card3])

    const round = createRound(deck)

    it('should be an object', function(){
        expect(round).to.be.an('object')
    })

    it('should add deck to deck key', function() {
        expect(deck[0].id).to.equal(1)
    })

    it('should start at turn 0', function() {
        expect(round.turns).to.equal(0)
    })
})

describe('take turn', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(3, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = createDeck([card1, card2, card3])

    const round = createRound(deck)

    // correct guess
    it('should increment turn to 1', function() {
        takeTurn('sea otter', round)
        expect(round.turns).to.equal(1)
    })
    
    // incorrect guess
    it('should increment turn to 2', function() {
        takeTurn('spleen', round)
        expect(round.turns).to.equal(2)
    })

    it('should add card ID to incorrectGuesses array', function() {
        expect(round.incorrectGuesses).to.deep.equal([2])
    })
})

describe('calculate percentage', function() {
    const mockRound = {
        turns: 10,
        incorrectGuesses: ['one', 'two']
    }

    const percent = calculatePercentCorrect(mockRound)

    it('should calculate percent total of correct guesses', function() {
        expect(percent).to.equal(80)
    })
})

describe('end round', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(3, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const card4 = createCard(4, 'What is Scotty\'s middle name?', ['lee', 'laa', 'loo'], 'lee');

    const deck = createDeck([card1, card2, card3, card4])

    const round = createRound(deck)
    const turn1 = takeTurn('pug', round)
    const turn2 = takeTurn('gallbladder', round)
    const turn3 = takeTurn('playing with bubble wrap', round)
    const turn4 = takeTurn('laa', round)

    const endRoundSentence = endRound(round)
console.log(endRoundSentence)
    it('should return endRound statement with correct percentage', function() {
        expect(endRoundSentence).to.equal('**Round Over!** You answered 50% of the questions correctly!')
    })
})