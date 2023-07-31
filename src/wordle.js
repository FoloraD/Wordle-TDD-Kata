

function scoreGuess(guess, target) {
    //condition to test ? value if true : value if false
//return guess === target ? ["C"] : ["I"] ;

// for each character in the guess string, 
//the function checks whether it matches the corresponding character in the target string
let score = [];
for(let i = 0; i < guess.length; i++) { 
    if (guess[i] === target[i]) {
        score.push('2'); 
    }else if(target.includes(guess[i])) {
        score.push('1'); 
    }else {
        score.push('0');
    }
    
}
return score.join('');
};

module.exports = scoreGuess;

//Solution
/**
 * The function 'scoreGuess' takes 2 arguments 'guess' and 'target' and returns a 'score' array
 * The function iterates through each character of 'guess' and compares it to the character at the same index in 'target'
 * If characters match '2' is added to 'score' array
 * If characters dont match but the character from 'guess' is present in 'target' '1' is added to the 'score' array
 * Otherwise '0' is added to the 'score' array
 * 
 *
 * 
 * 
 * 
 * 
 */