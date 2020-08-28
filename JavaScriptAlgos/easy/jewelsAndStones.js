/** 771. Jewels and Stones
 * You're given strings J representing the types of stones that are jewels, 
 * and S representing the stones you have.  
 * Each character in S is a type of stone you have.  
 * You want to know how many of the stones you have are also jewels.
 * 
 * The letters in J are guaranteed distinct, and all characters in J and S are letters. 
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * Example 1:
 * Input: J = "aA", S = "aAAbbbb"
 * Output: 3
 * Example 2:
 * Input: J = "z", S = "ZZ"
 * Output: 0
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // creating a dictionary of jewels to cross check if any of your stones are Jewels
    let jewels = {};
    // creating a count to increase whenever you find out that your stone is in fact a Jewel
    let count = 0;
    
    // creating the dictionary
    for(let jewel of J){
        if(jewel in jewels) jewels[jewel] ++;
        else jewels[jewel] = 0;
    }
    
    // looping though your stones
    for(let stone of S){
        if(stone in jewels) count ++;
    }
    
    // returning the result
    return count;
    /**
     * Runtime: 64 ms
     * Memory Usage: 34.4 MB
     * Your runtime beats 98.82 % of javascript submissions.
     * Your memory usage beats 86.43 % of javascript submissions.
     */
};