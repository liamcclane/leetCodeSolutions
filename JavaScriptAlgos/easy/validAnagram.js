/**242. Valid Anagram
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * 
 * Example 1:
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let dict = {};

    // building the dict
    for (let letter of s) {
        if (letter in dict) {
            dict[letter]++;
        } else {
            dict[letter] = 1;
        }
    }

    for (let letter of t) {
        if (!(letter in dict)) {
            return false;
        } else {
            dict[letter]--;
            if (dict[letter] === 0) {
                delete dict[letter];
            }
        }
    }

    if (Object.keys(dict).length > 0) { return false; }
    return true;
};
/**
 * Runtime: 92 ms, faster than 71.35% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 39.4 MB, less than 41.10% of JavaScript online submissions for Valid Anagram.
 */
console.log(isAnagram("cat", "rat"));
console.log(isAnagram("cat", "t"));
console.log(isAnagram("cat", "tac"));

const x = (s, t) => {
    let dict = {}, len = s.length;

    // building the dict
    for (let i = 0; i < len; i++) {
        let letter = s[i];
        if(!(s.includes(t[i]))){return false;}
        if (letter in dict) {
            dict[letter]++;
        } else {
            dict[letter] = 1;
        }
    }

    for (let letter of t) {
        if (!(letter in dict)) {
            return false;
        } else {
            dict[letter]--;
            if (dict[letter] === 0) {
                delete dict[letter];
            }
        }
    }

    if (Object.keys(dict).length > 0) { return false; }
    return true;
    /**
     * Runtime: 88 ms, faster than 80.18% of JavaScript online submissions for Valid Anagram.
     * Memory Usage: 38 MB, less than 81.71% of JavaScript online submissions for Valid Anagram.
     */
}
console.log(x("cat", "rat"));
console.log(x("cat", "t"));
console.log(x("cat", "tac"));
