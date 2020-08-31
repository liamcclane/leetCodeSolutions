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
const isPalindrome = function (s) {
    s = s.toLowerCase();
    let start = "a".charCodeAt(0), end = "z".charCodeAt(0);
    let onlyAlpha = "";
    for (let i = 0; i < s.length; i++) {
        let letterCode = s.charCodeAt(i);
        // if - the letter we are looking at is in the alphabet
        // else if - it is a number 
        if (letterCode >= start && letterCode <= end) {
            onlyAlpha += s[i];
        } else if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(s[i])) && s[i] != " ") {
            onlyAlpha += s[i];
        }
    }
    // console.log(onlyAlpha);
    // console.log(onlyAlpha.length);
    let j = onlyAlpha.length - 1;
    for (let i = 0; i < j; i++, j--) {
        if (onlyAlpha[i] != onlyAlpha[j]) {
            // console.log("failed!");
            // console.log(onlyAlpha[i],onlyAlpha[j]);
            return false
        }
    }
    return true;
    /***
     * Runtime: 68 ms, faster than 79.84% of JavaScript online submissions for Valid Palindrome.
     * Memory Usage: 39.5 MB, less than 30.43% of JavaScript online submissions for Valid Palindrome.
     */
};
console.log(isPalindrome("abc1cba"));

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log();
// console.log(isPalindrome("race a car"));
// console.log();
// console.log(isPalindrome("0P")); // that case I was failing before the else if was in place

/*********************************************************************/
/**680- Valid Palindrome II
 * 
 * Given a non-empty string s, you may delete at most one character. 
 * Judge whether you can make it a palindrome.
 * 
 * Example 1:
 * Input: "aba"
 * Output: True
 * Example 2:
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'.
 * 
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s) {
    let j = s.length - 1;
    let paths = [];// once we have tired a path this will look like ["i",[2,22]]
    for (let i = 0; i <= j; i++, j--) {
        if (s[i] != s[j]) {
            // console.log(`s[i] : \t${s[i]}`);
            // console.log(`s[j] : \t${s[j]}`);
            // console.log(`i : \t${i}`);
            // console.log(`j : \t${j}`);
            // look to either increase i or decrease j
            if (paths.length === 2) {
                // revert both pointers
                i = paths[1][0];
                j = paths[1][1];
                // then do the opposite that you did last time at the last spot
                if (paths.includes('i')) {
                    j--;
                    paths.push("j");
                    paths.push([i, j]);
                } else {
                    paths.push("i");
                    paths.push([i, j]);
                    i++;
                }
                // console.log("******")
                // console.log(`s[i] : \t${s[i]}`);
                // console.log(`s[j] : \t${s[j]}`);
                // console.log(`i : \t${i}`);
                // console.log(`j : \t${j}`);
                // already tried once the i way
            } else if (paths.length === 0) {
                // never tired moving the pointers, let's move,
                if (s[i + 1] === s[j]) {
                    paths.push("i");
                    paths.push([i, j]);
                    i++;
                } else if (s[j - 1] === s[i]) {
                    paths.push("j");
                    paths.push([i, j]);
                    j--;
                } else if (!(s[i + 1] === s[j] || s[j - 1] === s[i])) return false;
            } else {
                return false;
            }
        }
        // console.log();
    }
    return true;
}
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindromeTimeConstraint = function (s) {
    const isPalindromeB = function (str) {
        let j = str.length - 1;
        for (let i = 0; i < j; i++, j--) {
            if (str[i] != str[j]) {
                return false;
            }
        }
        return true;
    };
    if (isPalindromeB(s)) return true;
    for (let i = 0; i < s.length; i++) {
        newWord = s.slice(0, i).concat(s.slice(i + 1, s.length));
        console.log(newWord);
        if (isPalindromeB(newWord)) return true;
    }
    return false;
    /**
     * Runtime: 88 ms, faster than 55.41% of JavaScript online submissions for Valid Palindrome II.
     * Memory Usage: 42.8 MB, less than 75.00% of JavaScript online submissions for Valid Palindrome II.
     */
};
// console.log(validP("abc"));
// console.log();
// console.log(validP("leqyxqopjzqdytivrzkdgmhchkgkpbdnewoubudgvykyqkcyoyeavbjplgodcocazrvhmarkrcozyuywostjdkxwghbaliccfqukgisqzqpukmaissranamsjawivxzbjqazzcaqfzsecgcfkzvvpjuinvhkjteoaqsmaedkifenmcmicgrwmmfubvpnrowszbofeyecwihgsemlwyipuzowyjapklsdbtupttabemanmgqbsatunrbhwleffelwhbrnutasbqgmnamebattputbdslkpajywozupiywlmesghiwceyefobzswornpvbufmmwrgcimcmnefikdeamsqaoetjkhvniujpvvzkfcgceszfqaczaqjbzxviwajsmanarssiamkupqzsigkuqfccilabhgwxkdjtsowyuyzocrkramhvrzacocdoglpjbvaeyoyckqykyvgdubuowendbpkgkhchmgdkzrvitydqzjpoqxyqel")); // true
// console.log();
// console.log(validP("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")) // true
