/**
 * You have a total of n coins that you want to form in a staircase shape, 
 * where every k-th row must have exactly k coins.
 * 
 * Given n, find the total number of full staircase rows that can be formed.
 * 
 * n is a non-negative integer and fits within the range of a 32-bit signed integer.
 * 
 * Example 1:
 * 
 * n = 5
 * 
 * The coins can form the following rows:
 * ¤
 * ¤ ¤
 * ¤ ¤
 * 
 * Because the 3rd row is incomplete, we return 2.
 * Example 2:
 * 
 * n = 8
 * 
 * The coins can form the following rows:
 * ¤
 * ¤ ¤
 * ¤ ¤ ¤
 * ¤ ¤
 * 
 * Because the 4th row is incomplete, we return 3.
 * 
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let num = 0;
    let step = 0;
    while(num<=n){
        step ++;
        num += step;
    }
    return step - 1;
};
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoinsR = function (n) {
    let steps = 1, count = 0;
    while(n>0){
        if(n-count>steps+1){
            count = count + steps;
            n--;
            steps++;
        } else {
            return steps;
        }
    }

};
for(let i = 1; i<21; i++){
    console.log(`for ${i} number of coins ${arrangeCoins(i)} steps can be made`);
    console.log();
}

