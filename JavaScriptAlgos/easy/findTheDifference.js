/**389. Find The Difference
 * Given two strings s and t which consist of only lowercase letters.
 * 
 * String t is generated by random shuffling string s and 
 * then add one more letter at a random position.
 * 
 * Find the letter that was added in t.
 * 
 * Example:
 * 
 * Input:
 * s = "abcd"
 * t = "abcde"
 * 
 * Output:
 * e
 * 
 * Explanation:
 * 'e' is the letter that was added.
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let dictS = {};
    let dictT = {};
    for (let c of s) {
        // console.log(c)
        if (c in dictS) {
            dictS[c]++;
        } else {
            dictS[c] = 1;
        }
    }
    for (let c of t) {
        if (c in dictT) {
            dictT[c]++;
        } else {
            dictT[c] = 1;
        }
    }
    for (let key in dictS) {
        if (key in dictT) {
            if (dictT[key] === dictS[key]) {
                delete dictT[key];
            }
        }
    }
    // console.log(`dictT after deletion`);
    // console.log(dictT);
    // console.log(Object.keys(dictT)[0]);
    // console.log(Object.keys(dictT));
    return Object.keys(dictT)[0];
    /**
     * Runtime: 60 ms
     * Memory Usage: 37 MB
     */
};
let ex1 = "whatever", ex1b = "whatevers";
console.log(findTheDifference(ex1, ex1b));
/**tags for later look up 
 * refactorMe
 */