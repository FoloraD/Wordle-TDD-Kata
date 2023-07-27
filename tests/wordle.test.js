const scoreGuess = require('../src/wordle')
describe('scoreGuess', () => {
    test('identifies correct letters', () => {
        expect(scoreGuess('a', 'a')).toEqual(['C'])
    });
   
    test('identifies incorrect letters', () => {
        expect(scoreGuess('b', 'a')).toEqual(['I']);
    });
     //letters that do belong in the word but not in the location
    //b is in the target word but incorrect position = A(almost)
     // x is not in the target word = I(Incorrect)
    test('identifies almost letters', () => {
        expect(scoreGuess('bx', 'ab')).toEqual(['A', 'I']);

    });

});



