/**557 Reverse Words in String III
 * Given a string, you need to reverse the order of characters in each word within a sentence 
 * while still preserving whitespace and initial word order.
 * 
 * Example 1:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = [...s];
    let start = 0, end;
    let ans = '';
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ' ' || i === arr.length - 1) {
            if(i === arr.length -1) {
                end = i;
            } else {
                end = i - 1;
            }
            while(start < end) {
                [arr[start],arr[end]] = [arr[end],arr[start]];
                start++;
                end--;
            }
            start = i + 1;
        }
    }
    for(let letter of arr) {
        ans += letter;
    }
    return ans;
    // console.log(arr);
};
reverseWords("Let's take LeetCode contest");
/**
 * Runtime: 88 ms, faster than 19.37% of JavaScript online submissions for Reverse Words in a String III.
 * Memory Usage: 45.8 MB, less than 8.70% of JavaScript online submissions for Reverse Words in a String III.
 */