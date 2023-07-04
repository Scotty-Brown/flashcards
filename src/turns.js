function evaluateGuess(guess, answer) {
    if (guess === answer) {
        return 'Correct!'
    } else {
        return 'Incorrect!'
    }
}

module.exports = { evaluateGuess }