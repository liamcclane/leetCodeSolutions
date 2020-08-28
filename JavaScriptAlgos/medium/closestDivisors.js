/**1362. Closest Divisors
 * Given an integer num, find the closest two integers in absolute difference 
 * whose product equals num + 1 or num + 2.
 * 
 * Return the two integers in any order.
 * 
 *  
 * 
 * Example 1:
 * Input: num = 8
 * Output: [3,3]
 * Explanation: For num + 1 = 9, the closest divisors are 3 & 3, 
 * for num + 2 = 10, the closest divisors are 2 & 5, hence 3 & 3 is chosen.
 * 
 * Example 2:
 * Input: num = 123
 * Output: [5,25]
 * 
 * Example 3:
 * Input: num = 999
 * Output: [40,25]
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function (num) {
    let numPlusOne = num + 1;
    let numPlusTwo = num + 2;
    let intervals = [];
    let div1 = 2, div2;
    let minDiff;

    const findSomething = (x) => {
        while ((x % div1) != 0 && div1 < x) {
            div1++;
        };
        div2 = x / div1;
    }

    do {
        findSomething(numPlusOne);
        if (minDiff === undefined || minDiff > (Math.abs(div2 - div1))) {
            minDiff = Math.abs(div2 - div1);
            if (minDiff === undefined) {
                intervals.push([div1, div2]);
            } else {
                intervals[0] = [div1, div2];
            }
        }
        div1++;
    } while (div1 <= Math.ceil(numPlusOne / 2));

    div1 = 2;
    do {
        findSomething(numPlusTwo);
        if (minDiff > (Math.abs(div2 - div1))) {
            minDiff = Math.abs(div2 - div1);
            intervals[0] = [div1, div2];
        }
        div1++;
    } while (div1 <= Math.ceil(numPlusTwo / 2));
    return intervals[0];
};
// closestDivisors(8);
// console.log(closestDivisors(999));
// closestDivisors(123);
// console.log(closestDivisors(2));
// console.log(closestDivisors(688427155));

// this one times out...
// console.log(closestDivisors(912382423));

/**tags to look up later
 * unfinished
 * runtimeError
 * refactorMe - helperFunction
 * nestedWhileLoops
 * helperFunction
 */