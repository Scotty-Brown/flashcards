const chai = require('chai');
const expect = chai.expect;

const { createDeck } = require('../src/deck');
const { createCard } = require('../src/card')

describe('deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal',['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = createDeck([card1, card2, card3])

  it('create deck', function() {
    expect(deck).to.be.an('array')
    expect(deck[0].correctAnswer).to.equal('sea otter')
    expect(deck[2].id).to.equal(12)
  }) 

  it('count deck', () => {
    expect(deck.length).to.equal(3)
  })

});