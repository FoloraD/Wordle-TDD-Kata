const scoreGuess = require('../src/wordle')
describe('scoreGuess', () => {
    test('identifies correct letters', () => {
        expect(scoreGuess('a', 'a')).toEqual('C')
    });
});
    // test('it should show Target is a string',() => {
    //     expect(Wordle()).toBe('ropes');
        
    // });


