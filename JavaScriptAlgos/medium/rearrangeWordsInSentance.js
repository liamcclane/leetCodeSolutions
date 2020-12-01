/**1451. Rearrange Words in a Sentence
 * Given a sentence text (A sentence is a string of space-separated words) 
 * in the following format:
 * First letter is in upper case.
 * Each word in text are separated by a single space.
 * Your task is to rearrange the words in text such that all words are 
 * rearranged in an increasing order of their lengths. If two words have 
 * the same length, arrange them in their original order.
 * Return the new text following the format shown above.
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {

    // changing the first letter to lowercase
    text = text.charAt(0).toLowerCase() + text.slice(1, text.length);

    // splitting the string into an array of words
    let arr = text.split(" ");

    // sorting the array by word length
    arr.sort((wordA, wordB) => wordA.length - wordB.length);

    // changing the sorted first word to a capital letter
    arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1, arr[0].length);

    // combining the arr of words back into a single string
    arr = arr.join(" ");

    // returning the string
    return arr;
    /**
     * Runtime: 92 ms, faster than 76.98% of JavaScript online submissions for Rearrange Words in a Sentence.
     * Memory Usage: 42.8 MB, less than 61.90% of JavaScript online submissions for Rearrange Words in a Sentence.
     */
};
/**
 * Example 1:
 * Input: text = "Leetcode is cool"
 * Output: "Is cool leetcode"
 * Explanation: There are 3 words, "Leetcode" of length 8, "is" of length 2 and "cool" of length 4.
 * Output is ordered by length and the new first word starts with capital letter.
 *
 * Example 2:
 * Input: text = "Keep calm and code on"
 * Output: "On and keep calm code"
 * Explanation: Output is ordered as follows:
 * "On" 2 letters.
 * "and" 3 letters.
 * "keep" 4 letters in case of tie order by position in original text.
 * "calm" 4 letters.
 * "code" 4 letters.
 *
 * Example 3:
 * Input: text = "To be or not to be"
 * Output: "To be or to be not"
 */