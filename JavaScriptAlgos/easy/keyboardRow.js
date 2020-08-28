/**Keyboard Row-500
 * Given a List of words, 
 * return the words that can be typed using letters of alphabet on only one row's of American keyboard
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let dictKeyRow = {
        topRow: 'qwertyuiop',
        middleRow: 'asdfghjkl',
        bottomRow: 'zxcvbnm'
    };
    let ans = [];
    for (let word of words) {
        let whichRow = [];
        for (let letter of word) {
            if (dictKeyRow['topRow'].includes(letter) && !(whichRow.includes("topRow"))) {
                whichRow.push("topRow");
            } else if (dictKeyRow['middleRow'].includes(letter) && !(whichRow.includes("middleRow"))) {
                whichRow.push("middleRow");
            } else if (dictKeyRow['bottomRow'].includes(letter) && !(whichRow.includes("bottomRow"))) {
                whichRow.push("bottomRow");
            }
        }
        console.log(`the word, ${word}, needs these row of the keyboard ${whichRow}`);
        if (whichRow.length === 1) {
            ans.push(word);
        }
        console.log();
    }
    console.log(ans);
    return ans;
};
findWords(["Hello", "Alaska", "Dad", "Peace"]);
/**
 * Runtime: 56 ms, faster than 35.61% of JavaScript online submissions for Keyboard Row.
 * Memory Usage: 34 MB, less than 12.50% of JavaScript online submissions for Keyboard Row.
 */
/**tags for later look up
 * nestedForLoops
 * refactorMe
 */