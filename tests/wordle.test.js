const scoreGuess = require('../src/wordle')
describe('No matching characters', () => {
   //OOOOO
    test('identifies no matching characters', () => {
        expect(scoreGuess('b', 'a')).toEqual(['0']);
    });

    test('identifies 5 non matching characters', () => {
        expect(scoreGuess('bcdef', 'apwju')).toEqual(['0', '0', '0', '0', '0']);
    });

});

describe('All matching characters', () => {
    test('identifies match in 1 character string', () => {
        expect(scoreGuess('a', 'a')).toEqual(['2'])
    });

    test('identifies 5 characters in correct position', () => {
        expect(scoreGuess('ggggg', 'ggggg')).toEqual(['2', '2', '2', '2', '2']);
    }); //22222
});
 
describe('Some characters match in correct positions', () => {

    test('identifies 1 character in correct position', () => {
        expect(scoreGuess('bxgds', 'blell')).toEqual(['2', '0', '0', '0', '0']);
    });//20000

    test('identifies 2 characters in correct positions', () => {
        expect(scoreGuess('xcvgd', 'xpzwd')).toEqual(['2', '0', '0', '0', '2']);
    }); //20002

    test('identifies 3 characters in correct positions', () => {
        expect(scoreGuess('alert', 'alarm')).toEqual(['2', '2', '0', '2', '0']);
    }); //22020

});

describe('Characters in wrong position', () => {

    test('identifies 1 character in wrong position', () => {
        expect(scoreGuess('chore', 'stair')).toEqual(['0', '0', '0', '1', '0']);
    });

    test('Mix of match and wrong position', () => {
        expect(scoreGuess('charm', 'hairy')).toEqual(['0','1', '1', '2', '0']);
    });

    test('Multiple characters in wrong positions', () => {
        expect(scoreGuess('elect', 'reads')).toEqual(['1','0', '1', '0', '0']);
    });

    

    
});
