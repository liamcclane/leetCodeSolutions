/**1002. Find Common Characters
 * Given an array A of strings made only from lowercase letters, 
 * return a list of all characters that show up in all strings within the list 
 * (including duplicates).  
 * 
 * For example, if a character occurs 3 times in all strings but not 4 times, 
 * you need to include that character three times in the final answer.
 * 
 * You may return the answer in any order.
 * 
 * Example 1:
 * 
 * Input: ["bella","label","roller"]
 * Output: ["e","l","l"]
 * 
 * Example 2:
 * 
 * Input: ["cool","lock","cook"]
 * Output: ["c","o"]
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let gD = {};
    let fW = A[0];
    for(let c of fW){
        if(c in gD){
            gD[c] ++;
        } else {
            gD[c] = 1;
        }
    }
    // console.log(gD);
    for(let word of A){
        comD = {};
        for(let c of word){
            if(c in comD){
                comD[c]++;
            } else {
                comD[c] = 1;
            }
        }
        for(let key in gD){
            if(!(key in comD)){
                delete gD[key];
            } else {
                let min =  Math.min(gD[key], comD[key]);
                gD[key] = min;
            }
        }
    }
    // console.log(gD);
    let ans = [];
    for(let key in gD){
        for(let i = 0; i < gD[key]; i++){
            ans.push(key);
        }
    }
    return ans;
    /**
     * Runtime: 92 ms
     * Memory Usage: 43.3 MB
     */
};

ex1 = ["bella", "roller", "label"];
console.log(commonChars(ex1));


// var anotherWay = function(A){
//     let res = [];
//     let check = A[0];
//     for(let word of A){
//         newCheck = word;
//         for(let letter of newCheck){
//             if(letter in check){
//                 res.push(letter);
//             } else {
//                 res.
//             }
//         }
//     }
// }
/**tags for later look up
 * nestedForLoops
 * refactorMe
 */