/**748. Shortest Completing Word
 * Find the minimum length word from a given dictionary words, 
 * which has all the letters from the string licensePlate. 
 * Such a word is said to complete the given string licensePlate
 * 
 * Here, for letters we ignore case. 
 * For example, "P" on the licensePlate still matches "p" on the word.
 * 
 * It is guaranteed an answer exists. 
 * If there are multiple answers, return the one that occurs first in the array.
 * 
 * The license plate might have the same letter occurring multiple times. 
 * For example, given a licensePlate of "PP", the word "pair" 
 * does not complete the licensePlate, but the word "supper" does.
 * 
 * Example 1:
 * Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
 * Output: "steps"
 * 
 * Explanation: The smallest length word that contains the letters "S", "P", "S", and "T".
 * Note that the answer is not "step", because the letter "s" must occur in the word twice.
 * Also note that we ignored case for the purposes of comparing whether a letter exists in the word.
 * 
 * Example 2:
 * Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
 * Output: "pest"
 * 
 * Explanation: There are 3 smallest length words that contains the letters "s".
 * We return the one that occurred first.
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    // let dictLetters = {};
    // const start = 'A', end = 'z';
    // for(let letter of licensePlate){
    //     if(letter<end && letter>start){
    //         let lower = letter.toLowerCase();
    //         if(lower in dictLetters) {
    //             dictLetters[lower] ++;
    //         } else {
    //             dictLetters[lower] = 1;
    //         }
    //     }
    // }
    // console.log(dictLetters);
    // let ans = [];
    // for(let word of words){
    //     // console.log(word)
    //     ans.push(word);
    //     for(let key in dictLetters){
    //         // console.log(`key ${key}`);
    //         if(dictLetters[key]>1){
    //             let wordC = word;
    //             for(let i=0;i<dictLetters[key];i++){
                    
    //                 // console.log();
    //                 // wordC = wordC.slice(0,wordC.indexOf(key)-1) + wordC.slice(wordC.indexOf(key));
    //                 // console.log(wordC);
                    

    //             }
    //         } else {
    //             if(word.indexOf(key) === -1){
    //                 console.log(key);
    //                 console.log(word);
    //                 // continue;
    //                 ans.pop();
    //             }
    //         }
    //     }
    // }
    // ans = ans.sort((a,b)=> a.length - b.length);
    // console.log(ans);
    // return ans[0];
};
let ex1 = "1s3 PSt", words1 = ["step","sptlksdlkjfa", "steps","straw","stripe", "stepple"];
let ex2 = "1s3 456", words2 = ["looks", "pest", "stew", "show"];
console.log(shortestCompletingWord(ex1,words1));
console.log();
console.log(shortestCompletingWord(ex2,words2));
/**tags for later look up
 * finishMe
 */