/**394. Decode String
 * Given an encoded string, return its decoded string.
 * 
 * The encoding rule is: k[encoded_string], where the 
 * encoded_string inside the square brackets is being 
 * repeated exactly k times. Note that k is guaranteed 
 * to be a positive integer.
 * 
 * You may assume that the input string is always valid; 
 * No extra white spaces, square brackets are well-formed, etc.
 * 
 * Furthermore, you may assume that the original data does 
 * not contain any digits and that digits are only for those 
 * repeat numbers, k. For example, there won't be input like 3a or 2[4].
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    let answer = "", len = s.length,
        repNum = "", inner = "";
    /**Helper
     * this method takes a number as a starting index to step though
     * the global parameter s and return the inner string of 
     * the brackets repeated the correct amount of time
     * @param {number}
     * @return {[string, number]} the REPEATED inner stirng and the ending index of the brackets
     */
    const helper = (start) => {
        let innerStr = "", repNum = "", count = 0;

        while (s.charAt(start).match('[0-9]')) {
            repNum += s.charAt(start);
            start++;
        }
        repNum = parseInt(repNum);
        for (let i = start; i < len; i++) {
            let letter = s.charAt(i);
            // console.log(innerStr, "innerStr : ", letter, "letter");
            if (letter === "[") {
                count++;
            } else if (letter === "]") {
                count--;
            } else if (letter.match('[0-9]')) {
                let res = helper(i);
                // console.log(res, "res");
                innerStr += res[0];
                i = res[1];
            } else {
                innerStr += letter;
            }
            if (count === 0) {
                return [innerStr.repeat(repNum), i];
            }
        }
    }

    for (let i = 0; i < len; i++) {
        let letter = s.charAt(i);
        if (letter.match(['[0-9]'])) {
            let res = helper(i);
            // console.log(res, "res");
            answer += res[0];
            i = res[1];
        } else {
            answer += letter;
        }
    }
    return answer;
    /**
     * Runtime: 80 ms, faster than 39.57% of JavaScript online submissions for Decode String.
     * Memory Usage: 38.5 MB, less than 48.16% of JavaScript online submissions for Decode String.
     */

};