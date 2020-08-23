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
    if (word.length == 1) { return true; }
    const isUpperCase = str => str === str.toUpperCase();
    if (word.length == 2) {
        if ((isUpperCase(word.charAt(1))) && !isUpperCase(word.charAt(0))) {
            return false;
        }
        return true;
    }
    let centerIsCap, firstIsCap = isUpperCase(word.charAt(0));
    for (let i = 1; i < word.length - 1; i++) {
        if (isUpperCase(word.charAt(i)) != isUpperCase(word.charAt(i + 1))) {
            return false;
        }
        centerIsCap = isUpperCase(word.charAt(i));
    }
    if (centerIsCap) { 
        if(!firstIsCap){ return false;}
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