

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
return score;
};

module.exports = scoreGuess;
