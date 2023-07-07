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
    return eval
}

function calculatePercentCorrect(round) {
    return (round.turns - round.incorrectGuesses.length)/round.turns * 100
}

function endRound(round) {
    let percent = calculatePercentCorrect(round)
    return `**Round Over!** You answered ${percent}% of the questions correctly!`
}

module.exports = { 
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}