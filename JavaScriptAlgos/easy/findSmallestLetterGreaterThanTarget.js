/**Find Smallest Letter Greater Than Target
 * Given a list of sorted characters letters containing only lowercase letters, 
 * and given a target letter target, find the smallest element in the list 
 * that is larger than the given target.
 * 
 * Letters also wrap around. For example, if the target is target = 'z' 
 * and letters = ['a', 'b'], the answer is 'a'.
 * 
 * Examples:
 * Input:
 * letters = ["c", "f", "j"]
 * target = "a"
 * Output: "c"
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "c"
 * Output: "f"
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "d"
 * Output: "f"
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "g"
 * Output: "j"
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "j"
 * Output: "c"
 * 
 * Input:
 * letters = ["c", "f", "j"]
 * target = "k"
 * Output: "c"
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let i = alphabet.indexOf(target) + 1, isFound = false;
    while(!isFound){
        if(letters.includes(alphabet[i])){
            isFound = true;
        } else if (i > alphabet.length){
            i = 0;
        } else {
            i++;
        }
    }
    return alphabet[i];
    /**
     * Runtime: 92 ms
     * Memory Usage: 34 MB
     */
};
nextGreatestLetter(['a', 'b', 'c'], 'd');
/**tags for later look up
 * 
 */