/**151. Reverse Words in a String
 * Given an input string, reverse the string word by word.
 * 
 * Example 1:
 * 
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 * 
 * Example 2:
 * Input: "  hello world!  "
 * Output: "world! hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 * 
 * Example 3:
 * Input: "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two 
 * words to a single space in the reversed string.
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim();
    let words = s.split(" "), arr = [];

    for(let word of words) {
        if(word === "" || word === " "){continue;}
        arr.push(word);
    }

    console.log(arr);
    for (let start = 0, end = arr.length - 1;
        start <= end;
        start++, end--) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
    }
    return arr.join(" ");
    /**
     * Runtime: 100 ms, faster than 21.49% of JavaScript online submissions for Reverse Words in a String.
     * Memory Usage: 38.5 MB, less than 20.39% of JavaScript online submissions for Reverse Words in a String.
     */
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("      hello! world!   "));
console.log(reverseWords("a   good example"));