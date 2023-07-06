const { evaluateGuess } = require("./turns")
const cards = require('../src/data')

function createRound(deck) {
    return {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: []
    }
}

function takeTurn(guess, round) {
    const eval = evaluateGuess(guess, round.currentCard.correctAnswer)
    
    if(eval === 'Incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id)
    } else {
        eval
    }
    
    round.turns += 1
    round.currentCard = round.deck[round.turns]
}

module.exports = { 
    createRound,
    takeTurn
}