/**290. Word Pattern
 * 
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection (one-to-one)
 * between a letter in pattern and a non-empty word in str.
 * 
 * Example 1:
 * 
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * Example 2:
 * 
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * Example 3:
 * 
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 * Example 4:
 * 
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 * 
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let dict = {};
    let arrOfWords = []; // this array holds all the words from the str parsed by the space bar character
    let arrOfUniqueWords = [];
    let built = ""; // this is the running built word to push into the arrOfWords variable

    // this for loop builds the arrOfWords variable
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            built += str[i];
        }
        if (i === str.length - 1 || str[i] === " ") {
            arrOfWords.push(built);
            built = "";
        }
    }
    // console.log(arrOfWords);

    // this is a simple length check of the two things we are comparing
    if (pattern.length != arrOfWords.length) {
        return false;
    }

    // this for loop builds the dictionary 
    for (let i = 0; i < pattern.length; i++) {
        let letter = pattern[i];
        let word = arrOfWords[i];
        if ((letter in dict) && word != dict[letter]) {
            // we will step into the if condition if
            // the letter already exists in the dictionary
            // AND now the current word does not match what has already
            // been assigned to it 

            // examples 2 & 3 should fail here at i = 3 and i = 1 respectively

            // console.log(dict);
            // console.log(dict[letter])
            // console.log(word);
            return false
        } else if (!(letter in dict)) {
            dict[letter] = word;

            // this inner else if statement checks for the 4th example 
            // that should fail if the word was already assigned to an 
            // existing letter in the dictionary
            if (!(arrOfUniqueWords.includes(word))) {
                arrOfUniqueWords.push(word);
            } else {
                return false;
            }
        }
    }
    // console.log(dict);
    return true;
    /**
     * Runtime: 60 ms
     * Memory Usage: 33.9 MB
     * Your runtime beats 99.39 % of javascript submissions.
     * Your memory usage beats 77.84 % of javascript submissions
     */
};

// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log();

// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log();

// console.log(wordPattern("aaaa", "dog cat cat dog"));
// console.log();

// console.log(wordPattern("abba", "dog dog dog dog"));
// console.log();

// console.log(wordPattern("aaa", "aa aa aa aa")); // should return false

/**290. Word Pattern
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection 
 * between a letter in pattern and a non-empty word in str.
 * 
 * Example 1:
 * 
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * Example 2:
 * 
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * Example 3:
 * 
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 * Example 4:
 * 
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 */
const wordPatternlia = (pattern, str) => {
    let arrOfWords = str.split(" ");
    let len = pattern.length;
    if(len != arrOfWords.length){ return false;}
    let dictWithWordKeys = {};
    let dictWithLetterKeys = {};
    // dictWithLetterKeys = {
    //     "a" : "cat",
    //     "b" : "dog"
    // }

    // dictWithWordKeys = {
    //     "cat":"a",
    //     "dog":"b"
    // }

    // is what we want it to look like ya?

    for (let i = 0; i < len; i++) {
        let word = arrOfWords[i],
            letter = pattern[i],
            oldWord, oldLetter;

        if (letter in dictWithLetterKeys) {
            oldWord = dictWithLetterKeys[letter];
        } else {
            dictWithLetterKeys[letter] = word;
        }
        // console.log(oldLetter)
        // console.log(oldWord)
        // console.log(word)
        // console.log(letter)
        // console.log();
        if (word in dictWithWordKeys) {
            oldLetter = dictWithWordKeys[word];
        } else {
            dictWithWordKeys[word] = letter;
        }

        if (oldWord && oldWord != word) {
            return false;
        }
        if (oldLetter && oldLetter != letter) {
            return false;
        }


    }
    return true;
    /**
     * Runtime: 84 ms, faster than 32.56% of JavaScript online submissions for Word Pattern.
     * Memory Usage: 36.4 MB, less than 72.09% of JavaScript online submissions for Word Pattern.
     */
}
console.log(wordPatternlia("abba", "cat dog dog cat")); // true 
console.log(wordPatternlia("abc", "c a b")); // true
console.log(wordPatternlia("abba", "cat cat cat cat")); // false


/**tags for later look up
 * SeptemberChallenge
 * multipleSubmissions
 * bijection
 * 1-to-1
 */