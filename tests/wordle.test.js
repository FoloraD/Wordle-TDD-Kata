const scoreGuess = require('../src/wordle')
describe('scoreGuess', () => {
    test('identifies correct letters', () => {
        expect(scoreGuess('a', 'a')).toEqual(['C'])
    });
});



