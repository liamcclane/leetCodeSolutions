/**299. Bulls and Cows
 * You are playing the following Bulls and Cows game with your friend: 
 * You write down a number and ask your friend to guess what the 
 * number is. Each time your friend makes a guess, you provide 
 * a hint that indicates how many digits in said guess match 
 * your secret number exactly in both digit and position 
 * (called "bulls") and how many digits match the secret number 
 * but locate in the wrong position (called "cows"). Your friend 
 * will use successive guesses and hints to eventually derive 
 * the secret number.
 * 
 * Write a function to return a hint according to the secret 
 * number and friend's guess, use A to indicate 
 * the bulls and B to indicate the cows. 
 * 
 * Please note that both secret number and friend's 
 * guess may contain duplicate digits.
 * 
 * Example 1:
 * Input: secret = "1807", guess = "7810"
 * Output: "1A3B"
 * Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
 *
 * Example 2:
 * Input: secret = "1123", guess = "0111"
 * Output: "1A1B"
 * Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let bulls = 0, cows = 0, sLen = secret.length,
        dictSecret = {}, dictGuess = {};
    // key, val pair are numbers and quantity 
    // building the dicts
    let secretNums = secret.split("").map(ele => parseInt(ele)),
        guessNums = guess.split("").map(ele => parseInt(ele));
    for (let i = 0; i < sLen; i++) {
        if (secretNums[i] in dictSecret) {
            dictSecret[secretNums[i]]++;
        } else {
            dictSecret[secretNums[i]] = 1;
        }
        if (guessNums[i] in dictGuess) {
            dictGuess[guessNums[i]]++;
        } else {
            dictGuess[guessNums[i]] = 1;
        }
    }

    // now first we will loop though counting amount of bulls
    // and deleting from both dicts if we find a match
    for (let i = 0; i < sLen; i++) {
        if (secret[i] === guess[i]) {
            dictSecret[secret[i]]--;
            dictGuess[guess[i]]--;
            if (dictSecret[secret[i]] == 0) {
                delete dictSecret[secret[i]];
            }
            if (dictGuess[guess[i]] == 0) {
                delete dictGuess[guess[i]];
            }
            bulls++;
        }
    }

    // at the end of this for loop we should have the count of bulls
    // now we need to cross check the right amount of "letters"/numbers
    // that are not in the correct spot
    // cross check "deleted" dictGuess with "deleted" dictSecrete
    for (let key in dictGuess) {
        if (key in dictSecret) {
            cows += Math.min(dictGuess[key], dictSecret[key])
        }
    }

    return bulls + "A" + cows + "B";
    /**
     * Runtime: 104 ms, faster than 42.60% of JavaScript online submissions for Bulls and Cows.
     * Memory Usage: 42 MB, less than 17.33% of JavaScript online submissions for Bulls and Cows.
     */

};
const again = (secret, guess) => {

    let bulls = 0, cows = 0, sLen = secret.length,
        dictSecret = {}, dictGuess = {};
    // key, val pair are numbers and quantity 
    // building the dicts
    for (let i = 0; i < sLen; i++) {
        if (secret[i] in dictSecret) {
            dictSecret[secret[i]]++;
        } else {
            dictSecret[secret[i]] = 1;
        }
        if (guess[i] in dictGuess) {
            dictGuess[guess[i]]++;
        } else {
            dictGuess[guess[i]] = 1;
        }
    }

    // now first we will loop though counting amount of bulls
    for (let i = 0; i < sLen; i++) {
        if (secret[i] === guess[i]) {
            dictSecret[secret[i]]--;
            dictGuess[guess[i]]--;
            if (dictSecret[secret[i]] == 0) {
                delete dictSecret[secret[i]];
            }
            if (dictGuess[guess[i]] == 0) {
                delete dictGuess[guess[i]];
            }
            bulls++;
        }
    }

    // at the end of this for loop we should have the count of bulls
    // now we need to cross check the right amount of "letters"/numbers
    // that are not in the correct spot
    // cross check dictGuess with "deleted" dictSecrete
    for (let key in dictGuess) {
        if (key in dictSecret) {
            cows += Math.min(dictGuess[key], dictSecret[key])
        }
    }

    return bulls + "A" + cows + "B";
    /**
     * Runtime: 96 ms, faster than 54.15% of JavaScript online submissions for Bulls and Cows.
     * Memory Usage: 42.1 MB, less than 16.61% of JavaScript online submissions for Bulls and Cows.
     */
}
// console.log(again("11", "10"))
/**tags for late look up
 * SeptemberChallenge
 */