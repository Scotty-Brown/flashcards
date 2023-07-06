const chai = require('chai');
const expect = chai.expect;

const { start } = require('../src/game');

// Test below was used to test my start() function as I was building it //

describe('start game', () => {
    
    it.skip('should create card array', () => {
        const card = start()
        expect(card).to.be.an('array')
    })

    it.skip('should create card deck with a length of 30', () => {
        const card = start()
        expect(card.length).to.equal(30)
    })

    it('should create round with turns equal to 0', () => {
        const card = start()
        expect(card.turns).to.equal(0)
    })
})