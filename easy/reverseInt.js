/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * Input: 123
 * Output: 321
 * Example 2:
 * 
 * Input: -123
 * Output: -321
 * Example 3:
 * 
 * Input: 120
 * Output: 21
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNeg = false;
    if(x<0){
        x *= -1;
        isNeg = true;
    }
    let s = x.toString();
    s = [...s];
    let j = s.length;
    for(let i = 0; i < Math.floor(s.length/2); i++){
        let temp = s[i];
        s[i] = s[j-1-i];
        s[j-1-i] = temp; 
    }
    let reservedNumStr = "";
    for(val of s){
        reservedNumStr += val;
    }
    let ans = Number(reservedNumStr);
    if(isNeg){
        ans *= -1;
    }
    return ans;
};
console.log(reverse(123)); // 321
console.log()
console.log(reverse(-123)); // -321
console.log()
console.log(reverse(10900)); // 321
console.log()
/**
 * Input : 1534236469
 * Output : 9646324351
 * Expected : 0
 * 
 * I don't know why, and wont take answer on leetcode....
 */