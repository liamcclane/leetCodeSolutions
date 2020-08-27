/**1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 *Given a sentence that consists of some words separated by a single space, and a searchWord.
 * 
 * You have to check if searchWord is a prefix of any word in sentence.
 * 
 * Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).
 * 
 * If searchWord is a prefix of more than one word, return the index of the first 
 * word (minimum index). If there is no such word return -1.
 * 
 * A prefix of a string S is any leading contiguous substring of S.
 * 
 * Example 1:
 * Input: sentence = "i love eating burger", searchWord = "burg"
 * Output: 4
 * Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
 * 
 * Example 2:
 * Input: sentence = "this problem is an easy problem", searchWord = "pro"
 * Output: 2
 * Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, 
 * but we return 2 as it's the minimal index.
 * 
 * Example 3:
 * Input: sentence = "i am tired", searchWord = "you"
 * Output: -1
 * Explanation: "you" is not a prefix of any word in the sentence.
 * 
 * Example 4:
 * Input: sentence = "i use triple pillow", searchWord = "pill"
 * Output: 4
 * 
 * Example 5:
 * Input: sentence = "hello from the other side", searchWord = "they"
 * Output: -1
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let arrOfWords = sentence.split(" ");
    for (let i = 0; i < arrOfWords.length; i++) {
        let word = arrOfWords[i];
        if (word.length < searchWord.length) {
            continue;
        }
        if (word.slice(0, searchWord.length) == searchWord) {
            return i + 1;
        }
    }
    return -1;
};
/**
 * Runtime: 80 ms, faster than 31.37% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
 * Memory Usage: 36.1 MB, less than 33.85% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
 */
/**tags for later look up
 * 
 */