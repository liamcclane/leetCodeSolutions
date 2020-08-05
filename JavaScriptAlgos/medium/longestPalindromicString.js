/**5. Longest Palindromic Substring
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * Example 2:
 * 
 * Input: "cbbd"
 * Output: "bb"
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    const isPalindrome = str => {
        for (let front = 0, back = str.length - 1;
            front <= back;
            front++, back--) {
            if (str[front] != str[back]) {
                return false;
            }
        }
        return true;
    }

    let subPal = "";
    let len = s.length;

    for (let i = 0; i < len; i++) {

        let runningSub = s[i];

        for (let j = i + 1; j < len; j++) {
            if (isPalindrome(runningSub) && subPal.length < runningSub.length) {
                subPal = runningSub;
            }
            runningSub += s[j];
            // if (isPalindrome(runningSub) && subPal.length < runningSub.length) {
            //     subPal = runningSub;
            // }
        }

        if (isPalindrome(runningSub) && subPal.length < runningSub.length) {
            subPal = runningSub;
        }

    }

    return subPal;
};
// console.log(longestPalindrome("babad"));
/**Above run time too long
 */


/**Issues */
const longestSubPal = s =>{
    const isPal = str => {
        for(let front = 0, back = str.length -1;
            front <= back;
            front++, back--
            ) {
                if(str[front] != str[back]) {
                    return false;
                }
            }
            return true;
    }
    
    let subPal = "", len = s.length;
    for(let i = 0; i < len; i++) {
        let indOfNextOccurrence = Array.from(s).indexOf(s[i],i+1);
        if(indOfNextOccurrence == -1) {continue;}
        let runningSub = s.slice(i,indOfNextOccurrence+1);
        // console.log(Array.from(s).indexOf(s[i],i+1));
        // console.log(runningSub);
        if(isPal(runningSub) && runningSub.length > subPal.length) {
            subPal = runningSub;
        }
    }
    return subPal;
}
// console.log(longestSubPal("babduselkd"));
console.log(longestSubPal("bbubbles")); // return "bbubb"