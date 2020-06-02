/**1395. Count Number of Teams
 * There are n soldiers standing in a line. 
 * Each soldier is assigned a unique rating value.
 * 
 * You have to form a team of 3 soldiers amongst them under the following rules:
 * 
 * Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
 * A team is valid if:  (rating[i] < rating[j] < rating[k]) 
 *                   or (rating[i] > rating[j] > rating[k]) 
 *                   where (0 <= i < j < k < n).
 * Return the number of teams you can form given the conditions. 
 * (soldiers can be part of multiple teams).
 * 
 * Example 1:
 * 
 * Input: rating = [2,5,3,4,1]
 * Output: 3
 * Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 
 * 
 * Example 2:
 * 
 * Input: rating = [2,1,3]
 * Output: 0
 * Explanation: We can't form any team given the conditions.
 * Example 3:
 * 
 * Input: rating = [1,2,3,4]
 * Output: 4
 * Explanation: (1,2,3) ,(2,3,4), (1,2,4), (1,3,4)
 * 
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
    let count = 0, i = 0, j = 1, k = 2;
    while (i < rating.length - 2) {
        console.log(`${i} rating[i] \t${rating[i]}`);
        console.log(`${j} rating[j] \t${rating[j]}`);
        console.log(`${k} rating[k] \t${rating[k]}`);
        console.log();
        if (rating[i] < rating[j] && rating[j] < rating[k]) count++;
        else if (rating[i] > rating[j] && rating[j] > rating[k]) count++;
        k++;
        if (k >= rating.length && j >= rating.length - 1) {
            i++;
            j = i + 1;
            k = j + 1;
        } else if (k >= rating.length) {
            j++;
            // j = i + 1;
            k = j + 1;
            // console.log("IN HERE!!");
        }
    }
    return count;
};

console.log(numTeams([1, 2, 3, 4]));
/**
 * Runtime: 100 ms, faster than 31.89% of JavaScript online submissions for Count Number of Teams.
 * Memory Usage: 35.9 MB, less than 100.00% of JavaScript online submissions for Count Number of Teams.
 */