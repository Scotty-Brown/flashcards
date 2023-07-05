function createCard(id, question, answer, correctAnswer) {
    return {
        id: id,
        question: question,
        answers: answer,
        correctAnswer: correctAnswer
    }
}

module.exports = { createCard }