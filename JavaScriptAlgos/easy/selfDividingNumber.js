/**728. Self Dividing Numbers
 * A self-dividing number is a number that is divisible by every digit it contains.
 * 
 * For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, 
 * and 128 % 8 == 0.
 * 
 * Also, a self-dividing number is not allowed to contain the digit zero.
 * 
 * Given a lower and upper number bound, output a list of every possible self 
 * dividing number, including the bounds if possible.
 * 
 * Example 1:
 * Input: 
 * left = 1, right = 22
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    /**
     * this function loops though every "letter" of the passed in string
     * then check to see if that "letter" is evenly divisible by the bigger number passed in 
     * @param {*} str
     * @returns {boolean} 
     */
    const canBeAdded = (str) => {
        for (let letter of str) {
            if (letter === "0") {
                return false;
            }
            if (parseInt(str) % parseInt(letter) != 0) {
                return false;
            }
        }
        return true;
    }

    let ans = [];
    for (let i = left; i <= right; i++) {
        if (canBeAdded(i.toString())) {
            ans.push(i);
        }
    }
    return ans;
    /**
     * Runtime: 96 ms, faster than 38.91% of JavaScript online submissions for Self Dividing Numbers.
     * Memory Usage: 39.4 MB, less than 37.91% of JavaScript online submissions for Self Dividing Numbers.
     */
};
console.log(selfDividingNumbers(1, 22));