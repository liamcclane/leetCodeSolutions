/**804. Unique Morse Code Words
 * International Morse Code defines a standard encoding where each letter 
 * is mapped to a series of dots and dashes, as follows: "a" maps to 
 * ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
 * 
 * For convenience, the full table for the 26 letters of the 
 * English alphabet is given below:
 * 
 * [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",
 * ".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",
 * ".--","-..-","-.--","--.."]
 * Now, given a list of words, each word can be written as a concatenation of 
 * the Morse code of each letter. For example, "cab" can be written as "-.-..--...", 
 * (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a 
 * concatenation, the transformation of a word.
 * 
 * Return the number of different transformations among all words we have.
 * 
 * Example:
 * Input: words = ["gin", "zen", "gig", "msg"]
 * Output: 2
 * Explanation: 
 * The transformation of each word is:
 * "gin" -> "--...-."
 * "zen" -> "--...-."
 * "gig" -> "--...--."
 * "msg" -> "--...--."
 * 
 * There are 2 different transformations, "--...-." and "--...--.".
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let morseAlpha = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.",
        "....", "..", ".---", "-.-", ".-..", "--", "-.",
        "---", ".--.", "--.-", ".-.", "...", "-", "..-",
        "...-", ".--", "-..-", "-.--", "--.."];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let morseDict = {};
    for (let i = 0; i < 26; i++) {
        morseDict[alphabet[i]] = morseAlpha[i];
    }
    let morseArr = words.map((word) => {
        let str = "";
        for (let letter of word) {
            str += morseDict[letter];
        }
        // str += Array.from(word).map(letter => morseDict[letter]);
        // console.log('str')
        // console.log(str)
        // console.log()
        return str;
    });
    console.log(morseArr);
    let dictUnique = {}, count = 0;
    for (let morseWord of morseArr) {
        if (!(morseWord in dictUnique)) {
            dictUnique[morseWord] = 1;
            count++;
        }
    }
    return count;
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
/**
 * Runtime: 84 ms, faster than 33.00% of JavaScript online submissions for Unique Morse Code Words.
 * Memory Usage: 38.3 MB, less than 18.18% of JavaScript online submissions for Unique Morse Code Words.
 */