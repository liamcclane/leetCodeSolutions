/**316. Remove Duplicate Letters
 * 
 * Given a string s, remove duplicate letters so that every letter 
 * appears once and only once. You must make sure your result is 
 * the smallest in lexicographical order among all possible results.
 * 
 * Example 1:
 * 
 * Input: s = "bcabc"
 * Output: "abc"
 * 
 * Example 2:
 * 
 * Input: s = "cbacdcbc"
 * Output: "acdb"
 * 
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {

    let dict = {}, rntStr = "",
        dictLastOccurrence = {},
        dictFirstOccurrence = {}

    for (let i = 0; i < s.length; i++) {
        let letter = s.charAt(i);
        if (letter in dict) {
            dict[letter].push(i);
            dictLastOccurrence[letter] = i;
        } else {
            dict[letter] = [i];
            dictLastOccurrence[letter] = i;
            dictFirstOccurrence[letter] = i;
        }
    }
    console.log(dict);
    console.log(dictFirstOccurrence);
    console.log(dictLastOccurrence);
    console.log();
    return rntStr;
};
/**tags for later look up
 * unfinished
 */

// console.log(removeDuplicateLetters("bcabc"));
// console.log("abc");
// console.log();

console.log(removeDuplicateLetters("cbacdcbc"), " <= acdb");
console.log();

// console.log(removeDuplicateLetters("lksjdaloivawehaalksdfalekaleksf"));
// console.log("jaloivwehdfks");
// console.log();

// console.log(removeDuplicateLetters("bacegfhhhaslkbaccefghh"));
// console.log("acefhslkbg");
// console.log();

// console.log(removeDuplicateLetters("mmmlm"));
// console.log("lm");
// console.log();

/**
 *
 *
 // if every letter is unique
 if (Object.keys(dict).length == s.length) {
     return s;
 }
 let orderedKeys = Object.keys(dict), orderedValsOfLastOcc = Object.entries(dictLastOccurrence);
 orderedKeys.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
 orderedValsOfLastOcc.sort((a, b) => a[1] - b[1]);
 console.log(orderedKeys);
 console.log(orderedValsOfLastOcc);
 console.log("rntStr ", rntStr);
 let arrOfIndWeNeed = [];
 for(let [key, val] of orderedValsOfLastOcc) {
     if(val == dictFirstOccurrence[key]) {
         console.log("key : ", key);
         arrOfIndWeNeed.push(val);
     }
 }
 let startInd = arrOfIndWeNeed.length == 0 ? 0 : arrOfIndWeNeed[0];
 let count = 0;
 for( ;count < 50 && orderedKeys.length != 0 ;startInd++, count++) {
     console.log(s.slice(startInd, s.length), s[startInd], "letter" , s.slice(startInd, s.length).indexOf(s[startInd], startInd));
     if(s.slice(startInd, s.length).indexOf(s[startInd], startInd) == -1) {
         rntStr += s[startInd];
         orderedKeys.slice(orderedKeys.indexOf(s[startInd]));
         console.log(rntStr, " rntString");
     }
 }
 return rntStr;
 */
