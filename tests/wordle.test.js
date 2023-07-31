const scoreGuess = require('../src/wordle')
describe('No matching characters', () => {
   //OOOOO
    test('identifies no matching characters', () => {
        expect(scoreGuess('b', 'a')).toEqual('0');
    });

    test('identifies 5 non matching characters', () => {
        //expect(scoreGuess('bcdef', 'apwju')).toEqual(['0', '0', '0', '0', '0']);
        expect(scoreGuess('bcdef', 'apwju')).toEqual("00000");
    });

});

describe('All matching characters', () => {
    test('identifies match in 1 character string', () => {
        expect(scoreGuess('a', 'a')).toEqual("2")
    });

    test('identifies 5 characters in correct position', () => {
        expect(scoreGuess('ggggg', 'ggggg')).toEqual(("22222"));
    }); //22222
});
 
describe('Some characters match in correct positions', () => {

    test('identifies 1 character in correct position', () => {
        expect(scoreGuess('bxgds', 'blell')).toEqual(("20000"));
    });//20000

    test('identifies 2 characters in correct positions', () => {
        expect(scoreGuess('xcvgd', 'xpzwd')).toEqual(("20002"));
    }); //20002

    test('identifies 3 characters in correct positions', () => {
        expect(scoreGuess('alert', 'alarm')).toEqual(("22020"));
    }); //22020

});

describe('Characters in wrong position', () => {

    test('identifies 1 character in wrong position', () => {
        expect(scoreGuess('chore', 'stair')).toEqual(("00010"));
    });

    test('Mix of match and wrong position', () => {
        expect(scoreGuess('charm', 'hairy')).toEqual(("01120"));
    });

    test('Multiple characters in wrong positions', () => {
        expect(scoreGuess('elect', 'reads')).toEqual(("10100"));
    });

    

    
});
