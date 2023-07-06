const chai = require('chai');
const expect = chai.expect;

// const { createRound } = require('../src/round');
const { createRound } = require('../src/round');
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