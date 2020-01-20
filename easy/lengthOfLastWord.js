/**
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

    // let's count how many words are in the string
    let indOfLastSpace = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            indOfLastSpace = i;
        }
    }

    // if the string is one word
    if (indOfLastSpace == 0) {
        return s.length;
    }

    // find the last word, aka the last space and count from the end
    return s.length - indOfLastSpace - 1;
}

// console.log(lengthOfLastWord("dsklfja; djf;alsj ;a;sieouraoiw asdf aera"))
console.log(lengthOfLastWord("dsklfja;djf;"))

/**trying to take care of edge cases
 * 
 * function lengthOfLastWord(s) {
 *     
 *     if(s===' '){
 *         return 0
 *     }
 *     
 *     // let's count how many words are in the string
 *     let indOfLastSpace = 0;
 *     for (let i = 0; i < s.length; i++) {
 *         if (s[i] == ' ') {
 *             indOfLastSpace = i;
 *         }
 *     }
 *     
 *     if(indOfLastSpace === s.length -1){
 *         s.splice(indOfLastSpace,1)
 *         return lengthOfLastString(s);
 *     }
 * 
 *     // if the string is one word
 *     if (indOfLastSpace == 0) {
 *         if(s[0]===' '){
 *             return s.length - 1;
 *         }
 *         return s.length;
 *     }
 *     
 *     if(indOfLastSpace == s.length - 1){
 *         
 *     }
 * 
 *     // find the last word, aka the last space and count from the end
 *     return s.length - indOfLastSpace - 1;
 * };
 * 
 */
