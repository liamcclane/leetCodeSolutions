/**Keyboard Row-500
 * Given an array of strings words, return the words that can be 
 * typed using letters of the alphabet on only one row of American keyboard like the image below.
 * 
 * In the American keyboard:
 * 
 * the first row consists of the characters "qwertyuiop",
 * the second row consists of the characters "asdfghjkl", and
 * the third row consists of the characters "zxcvbnm".
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords2 = function(words) {
    
    const dict = {};
    
    const fillDict = arr => {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
                dict[arr[i].charAt(j).toString()] = i;       
            }
        }
    }
    
    fillDict(["qwertyuiop","asdfghjkl","zxcvbnm"]);
    
    const singleLine = word => {
        for(let i = 0, j = 1; j < word.length; i++, j++) {
            if(dict[word.charAt(i).toLowerCase()] != dict[word.charAt(j).toLowerCase()]) {
                return false;
            }
        }
        return true;
    }
    
    return words.filter(word => singleLine(word));
};

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