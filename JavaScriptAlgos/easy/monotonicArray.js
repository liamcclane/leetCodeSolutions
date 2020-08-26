/**896. Monotonic Array
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 * 
 * An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
 * 
 * Return true if and only if the given array A is monotonic.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: [1,2,2,3]
 * Output: true
 * Example 2:
 * 
 * Input: [6,5,4,4]
 * Output: true
 * Example 3:
 * 
 * Input: [1,3,2]
 * Output: false
 * Example 4:
 * 
 * Input: [1,2,4,5]
 * Output: true
 * Example 5:
 * 
 * Input: [1,1,1]
 * Output: true
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function (A) {

    let len = A.length;
    let increasingOrDecreasing; // I will have this store a string of "inc" or "dec", got it
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
            if (prev > curr && increasingOrDecreasing == "inc") {
                return false;
            } else if (prev < curr && increasingOrDecreasing == "dec") {
                return false;
            }
        }
    }
    return true;
    /**
     * Runtime: 144 ms, faster than 10.51% of JavaScript online submissions for Monotonic Array.
     * Memory Usage: 43.3 MB, less than 22.34% of JavaScript online submissions for Monotonic Array.
     * 
     * not the best lol, but it runs and you solved it in record time lol
     * 
     * ha thanks lol 
     * 
     * of course, sometimes once I solve it one way i have a hard time deviating from my original thought process
     * It happens lol  okay want to do the daily too and see how it goes? or
     *  today's sounds good!
     * 
     * are you able to jump files?
     */
};
// what do you think?

// this makes a lot of sense and seems like a simple solution, lets run it




// example 1: true
console.log(isMonotonic([1,2,2,3]));

// example 2: true
console.log(isMonotonic([6,5,4,4]));

// example 4: true
console.log(isMonotonic([1,2,4,5]));

// example 5: true
console.log(isMonotonic([1,1,1]));

// example 6: true
console.log(isMonotonic([1,1,0]));

console.log("all below should be false");   // nice!
// this is just out of preference

// example 3: false
console.log(isMonotonic([1,3,2]));

// example 7: false
console.log(isMonotonic([2,2,2,1,4,5]));

// Yay!!! Well done

// thanks it is kinda wordy and you don't really need prev and curr 
// but sometimes it helps me think :)

// for sure, it makes it easier to visualize, the A[i]  A[i -1] A[i + 1] all gets confusing on what is what
// I am going to submit it like this and see what the stats are like 
//thumbs up

// hey :) HI SO, I GOT THIS TO WORK PRETTY EASY, EXCEPT IT ALLOWS STRAIGHT LINES AS WELL
// I DID NOT GET CODE [2,2,2,1,4,5] YES, OH NICE I ALWAYS FORGET ABOUT THAT
// that should be false correct?
// so I think I am going to use the continue key word here
// and take advantage of JavaScripts declaration of variables with out casing them 

/**
 * okay, so basically you got code but not for the cases of
 * [5,5,5,5] true okay,
 */