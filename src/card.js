function createCard(id, question, answer, correctAnswer) {
    return {
        id: id,
        question: question,
        answers: answer,
        correctAnswer: correctAnswer
    }
}

function evaluateGuess(guess, answer) {
    if (guess === answer) {
        return 'Correct!'
    } else {
        return 'Incorrect!'
    }
}

module.exports = {
    createCard,
    evaluateGuess
}