/** Valid Palindrome
 * Given a string, determine if it is a palindrome, considering 
 * only alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 * 
 * Example 1:
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * Example 2:
 * 
 * Input: "race a car"
 * Output: false
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let start = "a".charCodeAt(0), end = "z".charCodeAt(0);
    let onlyAlpha = "";
    for (let i = 0; i < s.length; i++) {
        let letterCode = s.charCodeAt(i);
        // if - the letter we are looking at is in the alphabet
        // else if - it is a number 
        if (letterCode >= start && letterCode <= end) {
            onlyAlpha += s[i];
        } else if([0,1,2,3,4,5,6,7,8,9].includes(Number(s[i])) && s[i] != " "){
            onlyAlpha += s[i];
        }
    }
    // console.log(onlyAlpha);
    // console.log(onlyAlpha.length);
    let j = onlyAlpha.length - 1;
    for (let i = 0; i < j; i++, j--) {
        if(onlyAlpha[i] != onlyAlpha[j]) {
            // console.log("failed!");
            // console.log(onlyAlpha[i],onlyAlpha[j]);
            return false
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log();
console.log(isPalindrome("race a car"));
console.log();
console.log(isPalindrome("0P")); // that case I was failing before the else if was in place

/***
 * Runtime: 68 ms, faster than 79.84% of JavaScript online submissions for Valid Palindrome.
 * Memory Usage: 39.5 MB, less than 30.43% of JavaScript online submissions for Valid Palindrome.
 */
