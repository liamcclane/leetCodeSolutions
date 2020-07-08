/** Letter Case Permutation *
 * Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.
 * 
 * Examples:
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * Input: S = "3z4"
 * Output: ["3z4", "3Z4"]
 * 
 * Input: S = "12345"
 * Output: ["12345"] 
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let arr = [];
    let len = S.length;
    for(let i = 0; i < len; i++) {
        // if S[i] is an alphabet character
        // push to the arr with opposite caps
        if(S[i]>='a'&&S[i]<='z') {
            // console.log("\tin the lower case if");
            arr.push(S);
            arr.push(S.slice(0,i) + S[i].toUpperCase() + S.slice(i+1,len));
        }
        if(S[i]>='A'&&S[i]<='Z') {
            // console.log("\tin the UPPER case if");
            arr.push(S);
            arr.push(S.slice(0,i) + S[i].toLowerCase() + S.slice(i+1,S.length));
        }
    }
    if(arr.length === 0) {
        arr.push(S); 
    }
    return arr;
};
console.log(letterCasePermutation("a1b2"));
// mine returns  [ '1a2b', '1A2b', '1a2b', '1a2B' ]
// should return ["a1b2","a1B2","A1b2","A1B2"]

var letterCasePer = (S) => {
    // I think I am going to try this with recursion...
}