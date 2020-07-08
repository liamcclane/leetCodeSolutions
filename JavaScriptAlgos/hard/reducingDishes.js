/**1402. Reducing Dishes
 * A chef has collected data on the satisfaction level of his n dishes. 
 * Chef can cook any dish in 1 unit of time.
 * 
 * Like-time coefficient of a dish is defined as the time taken 
 * to cook that dish including previous dishes multiplied by its 
 * satisfaction level  i.e.  time[i]*satisfaction[i]
 * 
 * Return the maximum sum of Like-time coefficient that the 
 * chef can obtain after dishes preparation.
 * 
 * Dishes can be prepared in any order and the chef can discard 
 * some dishes to get this maximum value.
 **************************** 
 * Example 1:
 * Input: satisfaction = [-1,-8,0,5,-9]
 * Output: 20
 * Explanation: After Removing the second and last dish, 
 *              the maximum total Like-time coefficient will be equal 
 *              to (-1*1 + 0*2 + 5*3 = 14). Each dish is prepared in one unit of time.
 * 
 * Example 2:
 * Input: satisfaction = [4,3,2]
 * Output: 0
 * Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)
 * 
 * Example 3:
 * Input: satisfaction = [-1,-4,-5]
 * Output: 35
 * Explanation: People don't like the dishes. No dish is prepared.
 * 
 * Example 4:
 * Input: satisfaction = [-2,5,-1,0,3,-3]
 * Output: 14
 * @param {number[]} satisfaction
 * @return {number}
 */
const maxSatisfaction = satisfaction => {
    let arr = satisfaction.sort((a, b) => { return ((a) - (b)) });
    let sums = [];
    if (arr[arr.length - 1] <= 0) { return 0; }
    for (let i = 0; i < satisfaction.length; i++) {
        let runningSum = 0, multiplier = 1;
        for (let j = i; j < arr.length; j++, multiplier++) {
            runningSum += arr[j] * multiplier;
        }
        if (runningSum < sums[sums.length - 1]) { return sums[sums.length - 1]; }
        sums.push(runningSum);
        runningSum = 0;
        multiplier = 1;
    }
    // console.log(sums);
    return Math.max(...sums);
}
console.log(maxSatisfaction([-1, -8, 0, 5, -9]));
console.log();
console.log("******************");
console.log(maxSatisfaction([4, 3, 2]));
console.log();
console.log("******************");
console.log(maxSatisfaction([-1, -4, -5]));
console.log();
console.log("******************");
console.log(maxSatisfaction([-2, 5, -1, 0, 3, -3]));

/**
 * Runtime: 72 ms, faster than 39.62% of JavaScript online submissions for Reducing Dishes.
 * Memory Usage: 37 MB, less than 12.74% of JavaScript online submissions for Reducing Dishes.
 */



var maxSatisfactionDraft = function (satisfaction) {
    let arr = satisfaction.sort((a, b) => { return ((a) - (b)); });
    console.log(arr);
    let sums = [], ind = 0, runningSum = 0, multiplier = 1;
    let str = "";
    for (let i = ind; i < arr.length; i++, multiplier++) {
        runningSum += (arr[i] * multiplier);
        str += `${arr[i]} * ${multiplier}\t ${runningSum}\n`;
    }
    console.log(str);
    sums.push(runningSum);
    runningSum = 0;
    multiplier = 1
    ind++;
    str = "";
    for (let i = ind; i < arr.length; i++, multiplier++) {
        runningSum += (arr[i] * multiplier);
        str += `${arr[i]} * ${multiplier} \t ${runningSum}\n`;
    }
    console.log(str);
    sums.push(runningSum);
    runningSum = 0;
    ind++;
    multiplier = 1;
    str = "";
    for (let i = ind; i < arr.length; i++, multiplier++) {
        runningSum += (arr[i] * (multiplier + 1));
        str += `${arr[i]} * ${multiplier} \t ${runningSum}\n`;
    }
    console.log(str);
    sums.push(runningSum);
    console.log(sums);
};