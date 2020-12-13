/**824. Goat Latin
 * A sentence S is given, composed of words separated by spaces. 
 * Each word consists of lowercase and uppercase letters only.
 * 
 * We would like to convert the sentence to "Goat Latin" 
 * (a made-up language similar to Pig Latin.)
 * 
 * The rules of Goat Latin are as follows:
 * 
 * If a word begins with a vowel (a, e, i, o, or u), 
 * append "ma" to the end of the word.
 * For example, the word 'apple' becomes 'applema'.
 *  
 * If a word begins with a consonant (i.e. not a vowel), 
 * remove the first letter and append it to the end, then add "ma".
 * For example, the word "goat" becomes "oatgma".
 *  
 * Add one letter 'a' to the end of each word per its word 
 * index in the sentence, starting with 1.
 * For example, the first word gets "a" added to the end, 
 * the second word gets "aa" added to the end and so on.
 * Return the final sentence representing the conversion from S to Goat Latin. 
 * 
 *  
 * 
 * Example 1:
 * Input: "I speak Goat Latin"
 * Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
 * 
 * Example 2:
 * Input: "The quick brown fox jumped over the lazy dog"
 * Output: 
 *      "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa 
 *       overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
    let words = S.split(" "), len = words.length,
        vowelsStr = "aAeEiIoOuU",
        vowels = {}, answer = "";

    for (let i = 0; i < vowelsStr.length; i++) {
        vowels[vowelsStr.charAt(i)] = 0;
    }

    const helper = (str, ind) => {
        if (str.charAt(0) in vowels) {
            return str + "ma" + "a".repeat(ind + 1);
        }
        return str.slice(1, str.length) + str.charAt(0) + "ma" + "a".repeat(ind + 1);
    }

    for (let i = 0; i < len; i++) {
        answer += helper(words[i], i);
        if (i != len - 1) { answer += " "; }
    }
    return answer;
    /**
     * Runtime: 72 ms, faster than 95.64% of JavaScript online submissions for Goat Latin.
     * Memory Usage: 38.8 MB, less than 60.00% of JavaScript online submissions for Goat Latin.
     */
};