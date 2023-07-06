const { createDeck } = require("./deck")
const cards = require('../src/data')

function createRound(deck) {
    return {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
}

// console.log(createRound())

module.exports = { 
    createRound
}