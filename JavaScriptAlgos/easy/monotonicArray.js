/**896. Monotonic Array
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 * 
 * An array A is monotone increasing if for all i <= j, A[i] <= A[j].  
 * An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
 * 
 * Return true if and only if the given array A is monotonic.
 * 
 * Example 1:
 * Input: [1,2,2,3]
 * Output: true
 * 
 * Example 2:
 * Input: [6,5,4,4]
 * Output: true
 * 
 * Example 3:
 * Input: [1,3,2]
 * Output: false
 * 
 * Example 4:
 * Input: [1,2,4,5]
 * Output: true
 * 
 * Example 5:
 * Input: [1,1,1]
 * Output: true
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function (A) {

    let len = A.length;
    let increasingOrDecreasing;
    for (let i = 1; i < len; i++) {
        let prev = A[i - 1], curr = A[i];

        if (prev - curr == 0) {
            // if they are the same
            continue;
        }
        // if the inc/dec is not declared
        if (increasingOrDecreasing == undefined) {
            if (prev > curr) {
                increasingOrDecreasing = "dec";
            } else {
                increasingOrDecreasing = "inc";
            }
        } else {
            // these if below check for cases where we need to exit early
            // and return false
            if (prev > curr && increasingOrDecreasing == "inc") {
                return false;
            } else if (prev < curr && increasingOrDecreasing == "dec") {
                return false;
            }
        }
    }
    // if we have reached the end of the for loop that means we have passed all the 
    // possible fails and can now return true
    return true;
    /**
     * Runtime: 144 ms, faster than 10.51% of JavaScript online submissions for Monotonic Array.
     * Memory Usage: 43.3 MB, less than 22.34% of JavaScript online submissions for Monotonic Array.
     */
};
// example 1: true
console.log(isMonotonic([1, 2, 2, 3]));

// example 2: true
console.log(isMonotonic([6, 5, 4, 4]));

// example 4: true
console.log(isMonotonic([1, 2, 4, 5]));

// example 5: true
console.log(isMonotonic([1, 1, 1]));

// example 6: true
console.log(isMonotonic([1, 1, 0]));

console.log("all below should be false");

// example 3: false
console.log(isMonotonic([1, 3, 2]));

// example 7: false
console.log(isMonotonic([2, 2, 2, 1, 4, 5]));