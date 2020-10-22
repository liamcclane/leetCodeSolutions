/**1370. Increasing Decreasing String
 * Given a string s. 
 * You should re-order the string using the following algorithm:
 * 
 * 1) Pick the smallest character from s and append it to the result.
 * 2) Pick the smallest character from s which is greater than the 
 * last appended character to the result and append it.
 * 3) Repeat step 2 until you cannot pick more characters.
 * 4) Pick the largest character from s and append it to the result.
 * 5) Pick the largest character from s which is smaller than the 
 * last appended character to the result and append it.
 * 6) Repeat step 5 until you cannot pick more characters.
 * 7) Repeat the steps from 1 to 6 until you pick all characters from s.
 * 
 * In each step, If the smallest or the largest character 
 * appears more than once you can choose any 
 * occurrence and append it to the result.
 * 
 * Return the result string after sorting s with this algorithm.
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    let dict = {}, areIncreasing,
        alphabet = "abcdefghijklmnopqrstuvwxyz", upDownInd = 0,
        rntStr = "";
    for (let letter of s) {
        if(letter in dict) {
            dict[letter]++;
        } else {
            dict[letter] = 1;
        }
    }
    // console.log(dict);
    // console.log(Object.keys(dict).length);
    while(Object.keys(dict).length > 0) {
        let letter = alphabet.charAt(upDownInd);
        if(letter in dict) {
            rntStr += letter;
            // console.log("rntStr", rntStr);
            dict[letter]--;
            if(dict[letter] == 0) {
                delete dict[letter];
            }
        }
        if(areIncreasing == undefined) {
            // console.log("if");
            areIncreasing = true;
            upDownInd++;
        } else if (areIncreasing && upDownInd == 25) {
            // console.log("if line 39");
            areIncreasing = false;
        } else if (!areIncreasing && upDownInd == 0) {
            // console.log("if line 42");
            areIncreasing = true;
        } else if (areIncreasing) {
            // console.log("if line 45");
            upDownInd++;
        } else {
            // console.log("if line 48");
            upDownInd--;
        }
    }
    return rntStr;
    /**
     * Runtime: 156 ms, faster than 20.53% of JavaScript online submissions for Increasing Decreasing String.
     * Memory Usage: 46 MB, less than 6.84% of JavaScript online submissions for Increasing Decreasing String.
     */
};
/**
 * Example 1:
 *
 * Input: s = "aaaabbbbcccc"
 * Output: "abccbaabccba"
 * Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
 * After steps 4, 5 and 6 of the first iteration, result = "abccba"
 * First iteration is done. Now s = "aabbcc" and we go back to step 1
 * After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
 * After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
 * 
 * Example 2:
 * Input: s = "rat"
 * Output: "art"
 * Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.
 *
 * Example 3:
 * Input: s = "leetcode"
 * Output: "cdelotee"
 *
 * Example 4:
 * Input: s = "ggggggg"
 * Output: "ggggggg"
 * 
 * Example 5:
 * Input: s = "spo"
 * Output: "ops"
 */
console.log(sortString("aaaabbbbcccc"));