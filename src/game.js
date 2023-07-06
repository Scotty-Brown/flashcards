const { createCard } = require('./card');
const { createDeck } = require('./deck')
const { createRound } = require('./round')
const data = require('./data');
const util = require('./util');
const prototypeQuestions = data.prototypeData;

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const cards = prototypeQuestions.map((card) => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer)
  })

  const deck = createDeck(cards)

  const round1 = createRound(deck)

  printMessage(deck)
  printQuestion(round1)
}

module.exports = { printMessage, printQuestion, start };
