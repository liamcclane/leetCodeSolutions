/**Detect Capital 520
 * Given a word, you need to judge whether the usage of capitals in it is right or not.
 * 
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 * 
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital, like "Google".
 * Otherwise, we define that this word doesn't use capitals in a right way.
 * 
 * Example 1:
 * Input: "USA"
 * Output: True
 * 
 * Example 2:
 * Input: "FlaG"
 * Output: False
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    // edge case of only one character
    if (word.length == 1) { return true; }

    // helper method
    const isUpperCase = str => str === str.toUpperCase();

    // if we are only given a word with only 2 characters
    //  we only have to check the last letter for caps AND first letter lower case
    if (word.length == 2) {
        if ((isUpperCase(word.charAt(1))) && !isUpperCase(word.charAt(0))) {
            return false;
        }
        return true;
    }

    // creating variables with centerIsCap undefined
    let centerIsCap, firstIsCap = isUpperCase(word.charAt(0));

    // now loop though starting with the second character comparing with the one next to it
    for (let i = 1; i < word.length - 1; i++) {

        // the moment we see the "center" adjacent characters not equaling each other
        // we can kick out of the whole function and return false
        if (isUpperCase(word.charAt(i)) != isUpperCase(word.charAt(i + 1))) {
            return false;
        }
        // else lets store info about the center
        centerIsCap = isUpperCase(word.charAt(i));
    }

    // now that the loop has finished we check if the center characters 
    // are capitalized and cross check it with the first letter to validate
    if (centerIsCap) {
        if (!firstIsCap) { return false; }
        return isUpperCase(word.charAt(word.length - 1));
    }
    return !(isUpperCase(word.charAt(word.length - 1)));
    /**
     * Runtime: 128 ms, faster than 6.97% of JavaScript online submissions for Detect Capital.
     * Memory Usage: 37.3 MB, less than 58.40% of JavaScript online submissions for Detect Capital.
     */
};
console.log(detectCapitalUse("C"), "C ");
console.log(detectCapitalUse("Ca"), "Ca ");
console.log(detectCapitalUse("Cc"), "Cc ");
console.log(detectCapitalUse("cc"), "cc ");
console.log(detectCapitalUse("CC"), "CC ");
console.log(detectCapitalUse("leetcode"), "leetcode ");
console.log(detectCapitalUse("Leetcode"), "Leetcode ");
console.log(detectCapitalUse("LEETCODE"), "LEETCODE ");
console.log(detectCapitalUse("LeeTCode"), "LeeTCode ");
console.log(detectCapitalUse("cC"), "cC ");
console.log(detectCapitalUse("cCD"), "cC ");