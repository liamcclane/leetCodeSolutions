/**187. Repeated DNA Sequences
 * All DNA is composed of a series of nucleotides 
 * abbreviated as 'A', 'C', 'G', and 'T', 
 * for example: "ACGAATTCCG". 
 * When studying DNA, it is sometimes useful 
 * to identify repeated sequences within the DNA.
 * 
 * Write a function to find all the 10-letter-long 
 * sequences (substrings) that occur more than 
 * once in a DNA molecule.
 * 
 * Example 1:
 * Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * Output: ["AAAAACCCCC","CCCCCAAAAA"]
 * 
 * Example 2:
 * Input: s = "AAAAAAAAAAAAA"
 * Output: ["AAAAAAAAAA"]
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let dict = {};
    let arr = [];
    for (let i = 0; i <= (s.length - 10); i++) {
        let subStr = s.substring(i, i + 10);
        if(subStr in dict) {
            dict[subStr]++;
        } else {
            dict[subStr] = 1;
        }
    }
    for (const key in dict) {
        if (dict[key] > 1) {
            arr.push(key);
        }
    }
    return arr;
    /**
     * Runtime: 168 ms, faster than 25.17% of JavaScript online submissions for Repeated DNA Sequences.
     * Memory Usage: 62.2 MB, less than 6.29% of JavaScript online submissions for Repeated DNA Sequences.
     */
};

// console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
// console.log(findRepeatedDnaSequences("AAAAAAAAAAA"));

let timeLimitExceeded = (s) => {
    if (s.length == 10) { return [s]; }
    let occursElseWhere = (str, ind) => {
        for (let j = ind; j <= (s.length - 10); j++) {
            let someOtherSub = s.substring(j, j + 10);
            // console.log("someOtherSub",someOtherSub);
            if (someOtherSub == str) { return true; }
        }
        return false;
    }
    let arr = [];
    for (let i = 0; i <= s.length - 10; i++) {
        let sub = s.substring(i, i + 10);
        // console.log("sub", sub);
        if (occursElseWhere(sub, i + 1)) {
            if (arr[arr.length - 1] != sub) {
                arr.push(sub);
            }
        }
        // console.log("arr", arr);
    }
    // console.log("arr", arr);
    return arr;
}