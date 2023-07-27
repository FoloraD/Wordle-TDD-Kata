const scoreGuess = require('../src/wordle')
describe('No matching characters', () => {
   
    test('identifies no matching characters', () => {
        expect(scoreGuess('b', 'a')).toEqual(['I']);
    });

    test('identifies 5 non matching characters', () => {
        expect(scoreGuess('bcdef', 'apwju')).toEqual(['I', 'I', 'I', 'I', 'I']);
    });

});

describe('All matching characters', () => {
    test('identifies match in 1 character string', () => {
        expect(scoreGuess('a', 'a')).toEqual(['C'])
    });

    test('identifies 5 characters in correct position', () => {
        expect(scoreGuess('ggggg', 'ggggg')).toEqual(['C', 'C', 'C', 'C', 'C']);
    });
});
 
describe('Some characters match in correct positions', () => {

    test('identifies 1 character in correct position', () => {
        expect(scoreGuess('bx', 'ab')).toEqual(['A', 'I']);
    });

    test('identifies 2 characters in correct positions', () => {
        expect(scoreGuess('xcgd', 'dxpw')).toEqual(['A', 'I', 'I', 'A']);
    });
    
    test('identifies 3 characters in correct positions', () => {
        expect(scoreGuess('alert', 'alarm')).toEqual(['C', 'C', 'I', 'C', 'I']);
    });

});

describe('Characters match in correct positions', () => {

    test('identifies 1 character in correct position', () => {
        expect(scoreGuess('bx', 'ab')).toEqual(['A', 'I']);
    });

    test('identifies 2 characters in correct positions', () => {
        expect(scoreGuess('xcgd', 'dxpw')).toEqual(['A', 'I', 'I', 'A']);
    });
    test('identifies 3 characters in correct positions', () => {
        expect(scoreGuess('alert', 'alarm')).toEqual(['C', 'C', 'I', 'C', 'I']);
    });

});


