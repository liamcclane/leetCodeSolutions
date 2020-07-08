/** Reverse String II**
 * 
 * Given a string and an integer k, 
 * you need to reverse the first k characters 
 * for every 2k characters counting from the start of the string. 
 * If there are less than k characters left, reverse all of them. 
 * If there are less than 2k but greater than or equal to k characters, 
 * then reverse the first k characters and left the other as original.
 * 
 * Example:
 * Input: s = "abcdefg", k = 2
 * Output:    "bacdfeg"
 * 
 * Example:
 * Input: s = "aabccddeffgghiij";
 * Output:    "ccbaaddeffiihggj";
 * 
 * Example:
 * Input: s = "aabccddeffgghiijjk";
 * Output:    "ccbaaddeffiihggjjk";
 * 
 * Example:
 * Input: s = "aaBccddEf";
 * Output:    "ccBaaddEf";
 * 
 * Example:
 * Input: s = "aaBccddEffggHiijjKll";
 * Output:    "ccBaaddEffiiHggjjKll";
 * 
 * 

 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let len = s.length;
    // console.log(s[100]===undefined);
    for (let i = 0; i < len; i++) {
    }
}
// reverseStr("aaBccddEffggHiij");




/**
 *  this function takes in string,s, and an integer, k, and reverses 
 * the k amount of letters in clumps of the string
 * 
 * for example 
 * reverseStrWrong("abcde",2) returns "badce"
 * and 
 * reverseStrWrong("aabccddeffg", 5) returns "ccbaaffeddg";
 * @param {string} s 
 * @param {number} k 
 * @returns {string} 
 */
var reverseStrWrong = function (s, k) {
    let inner = "";
    let ans = "";
    let times = (Math.floor(s.length / k));

    if (k === 2) {
        let arr = [...s];
        let i = 0;
        while (times > 0) {
            // [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
            // console.log(arr);
            // console.log(arr[i]);
            // console.log(arr[i+1]);
            ans += arr[i + 1] + arr[i];
            // console.log(ans);
            i += 2;
            times--;
        }
        ans += s.slice(i, s.length);
        return ans;
    }

    for (let i = 0; i < s.length; i++) {
        inner += s[i];
        if ((i + 1) % k === 0) {
            let arr = [...inner];
            for (let j = 0; j <= Math.floor(inner.length / 2); j++) {
                [arr[j], arr[arr.length - 1 - j]] = [arr[arr.length - 1 - j], arr[j]];
            }
            for (let letter of arr) {
                ans += letter;
            }
            inner = "";
            times--;
        }
        if (s.length - 1 - k <= i && s.length && times <= 0) {
            ans += inner;
        }
    }
    return ans;
};
// console.log(reverseStr("abcde", 2));