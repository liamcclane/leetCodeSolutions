/**
 * In a string S of lowercase letters, these letters form 
 * consecutive groups of the same character.
 * 
 * For example, a string like S = "abbxxxxzyy" 
 * has the groups "a", "bb", "xxxx", "z" and "yy".
 * 
 * Call a group large if it has 3 or more characters.  
 * We would like the starting and ending positions of every large group.
 * 
 * The final answer should be in lexicographic order.
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    if(S.length < 3) return [];
    let ans = [];
    let count = 1;
    let start,store;
    for(let i = 1; i < S.length; i++ ) {
        // console.log();
        if(S[i-1] === S[i]) {
            count ++;
            if(store==null) {
                store = S[i];
                start = i;
            }
            if(i===S.length-1 && count>=3) {
                ans.push([start-1,i]);
            }
        } else {
            store = null;
            if(count >= 3) {
                ans.push([start-1,i-1]);
            }
            count = 1;
        }
    }
    return ans;
    /**
     * Runtime: 64 ms, faster than 96.30% of JavaScript online submissions for Positions of Large Groups.
     * Memory Usage: 37.1 MB, less than 25.00% of JavaScript online submissions for Positions of Large Groups.
     */
};

console.log(largeGroupPositions("aaa"));
// console.log(largeGroupPositions("abcddddddeeeeeefghxxxx"));
// console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
