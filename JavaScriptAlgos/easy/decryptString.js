/**1309. Decrypt String from Alphabet to Integer Mapping
 *Given a string s formed by digits ('0' - '9') and '#' . We want to map s to 
 English lowercase characters as follows:
 * 
 * Characters ('a' to 'i') are represented by ('1' to '9') respectively.
 * Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
 * Return the string formed after mapping.
 * 
 * It's guaranteed that a unique mapping will always exist.
 * 
 * Example 1:
 * Input: s = "10#11#12"
 * Output: "jkab"
 * Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
 *
 * Example 2:
 * Input: s = "1326#"
 * Output: "acz"
 *
 * Example 3:
 * Input: s = "25#"
 * Output: "y"
 *
 * Example 4:
 * Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
 * Output: "abcdefghijklmnopqrstuvwxyz"
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let alpha = "0abcdefghijklmnopqrstuvwxyz", len = s.length,
        ans = "";
    for (let i = 0; i < len; i++) {
        // console.log(s[i], " s[i] and s[i+2]", s[i + 2]);
        if (s[i + 2] && s[i + 2] === "#") {
            let num = Number(s[i] + s[i + 1]);
            ans += alpha[num];
            i += 2; // thumbs up
            continue;
        }
        ans += alpha[Number(s[i])];
    }
    // console.log(ans);
    return ans;
};
/**
 * Runtime: 92 ms, faster than 23.13% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
 * Memory Usage: 36.6 MB, less than 33.33% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
 */

// console.log(freqAlphabets("25#")); 
// console.log(freqAlphabets("1326#"));
// console.log(freqAlphabets("10#11#12"));
// console.log(freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"));

var freqAlphabetsRitz = function (s) {
    let len = s.length;
    let ans = "";
    let add = 0;
    let dict = {
        1: "a",
        2: "b",
        3: "c",
        4: "d",
        5: "e",
        6: "f",
        7: "g",
        8: "h",
        9: "i",
        10: "j",
        11: "k",
        12: "l",
        13: "m",
        14: "n",
        15: "o",
        16: "p",
        17: "q",
        18: "r",
        19: "s",
        20: "t",
        21: "u",
        22: "v",
        23: "w",
        24: "x",
        25: "y",
        26: "z"
    };
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === "#") {
            add = (parseInt(s[i - 2])*10) + parseInt(s[i - 1]); 
            ans = dict[add] + ans;
            // console.log(add, " add");
            // console.log(dict[add], " dict[add]");
            i -= 2;
        } else {
            ans = dict[parseInt(s[i])] + ans;
        }
        // console.log(ans, " <- ans");
    }
    return ans;

};

// Accepted!! 08.06.2020
// Runtime: 84 ms, faster than 32.08% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
// Memory Usage: 36.4 MB, less than 33.33% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.


// console.log(freqAlphabetsRitz("25#"));
// console.log(freqAlphabetsRitz("1326#"));
// console.log(freqAlphabetsRitz("10#11#12"));
// console.log(freqAlphabetsRitz("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"));