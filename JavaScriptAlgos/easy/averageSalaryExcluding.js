/**1491. Average Salary Excluding the Minimum and Maximum Salary
 * Given an array of unique integers salary where salary[i] is the salary of the employee i.
 * Return the average salary of employees excluding the minimum and maximum salary.
 * 
 * Example 1:
 * Input: salary = [4000,3000,1000,2000]
 * Output: 2500.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
 * Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500
 * 
 * Example 2:
 * Input: salary = [1000,2000,3000]
 * Output: 2000.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
 * Average salary excluding minimum and maximum salary is (2000)/1= 2000
 * 
 * Example 3:
 * Input: salary = [6000,5000,4000,3000,2000,1000]
 * Output: 3500.00000
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let minSal = salary[0];
    let maxSal = salary[0]; // lol nice
    let sum = 0;
    for (let i = 0; i < salary.length; i++) {
        if (salary[i] < minSal) {
            minSal = salary[i];
        } else if (salary[i] > maxSal) {
            maxSal = salary[i];
        }
        sum += salary[i];
        // so I don't think we can be looking and adding at the same time, i do see the problem 
        // unless we do something similary to the Abby and Bob chocolate switch thing,
        // add up every time not matter what, then just subtract the max and min
        // nice :)
    }
    sum -= minSal;
    // I like this one :) we still did it in oh of N time :) while finding the max and min
    //  I think it is funny how a lot of humans instinct is to add and multiply, as opposed to subtracting and dividing
    sum -= maxSal;
    return sum / (salary.length - 2);
};
/**
 * Runtime: 92 ms, faster than 27.96% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 * Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 */

let salary1 = [4000, 3000, 1000, 2000];
console.log(average(salary1)); // 2500.00000
console.log(average([1000, 2000, 3000]));//2000.00000
console.log(average([6000, 5000, 4000, 3000, 2000, 1000]));//3500.00000

const averageSal = salary => {
    // these two lines are destructuring the triple dots spread out the elements
    let min = Math.min(...salary);
    let max = Math.max(...salary);
    let sum = 0;
    salary.map(ele => {
        if (ele != min && ele != max) {
            sum += ele;
        }
    })
    return sum / (salary.length - 2);
}
/**
 * Runtime: 120 ms, faster than 7.75% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 * Memory Usage: 36.6 MB, less than 100.00% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
 */
console.log();
console.log(averageSal(salary1)); // 2500.00000
console.log(averageSal([1000, 2000, 3000]));//2000.00000
console.log(averageSal([6000, 5000, 4000, 3000, 2000, 1000]));//3500.00000
/**tags for later look up
 * RitzCollaboration
 * multipleSubmissions
 */