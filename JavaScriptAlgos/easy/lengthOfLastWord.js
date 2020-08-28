/**58. Length of Last Word
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
 * return the length of last word (last word means the last appearing word if we loop from left to right) in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a maximal substring consisting of non-space characters only.
 * 
 * Example:
 * 
 * Input: "Hello World"
 * Output: 5
 * 
 */
function lengthOfLastWord(s) {
    let arr = s.split(" ");
    let len = arr.length;
    let concatArr = [];
    for(let i = 0; i < len; i++) {
        if(arr[i] === " " || arr[i] === ""){
            continue;
        } else {
            concatArr.push(arr[i]);
        }
    }
    console.log(arr);
    console.log(concatArr);
    return concatArr.length >= 1 ? concatArr[concatArr.length - 1].length : 0;
    /**
     * Runtime: 68 ms, faster than 87.87% of JavaScript online submissions for Length of Last Word.
     * Memory Usage: 36.8 MB, less than 31.54% of JavaScript online submissions for Length of Last Word.
     */
}

console.log(lengthOfLastWord("dsklfja; djf;alsj ;a;sieouraoiw asdf aera"))
console.log(lengthOfLastWord("a "));