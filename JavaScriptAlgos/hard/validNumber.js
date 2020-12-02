/**65. Valid Number
 * Validate if a given string can be interpreted as a decimal number.
 * 
 * Some examples:
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 * " -90e3   " => true
 * " 1e" => false
 * "e3" => false
 * " 6e-1" => true
 * " 99e2.5 " => false
 * "53.5e93" => true
 * " --6 " => false
 * "-+3" => false
 * "95a54e53" => false
 * 
 * edge cases to think about 
 * ".e+" => false
 * "." => false
 * ".e" => false
 * "2e0" => false
 * "79e89e" => fasle
 * "" => false
 * "1 " => true
 * " " => false
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {

    /** Is Number
     * helper function uses decimalIsPresent as a logical gate for 
     * checking the validity of numbers that should come after the e
     * 
     * decimalIsPresent is preset to false, meaning that we are allowing 
     * for a single decimal to appear when looping though the string
     * that may represent a number
     * @param {string} str 
     * @param {boolean} decimalIsPresent
     * @returns {boolean} 
     */
    const isNumber = (str, decimalIsPresent = false) => {

        // this if statement trims off the only valid +/-
        // at the beginning of the potentially valid number string
        if (str.charAt(0) === "-" || str.charAt(0) === "+") {
            str = str.slice(1, str.length);
        }
        // this an edge case, since we are not allowing "0"
        // as an exponent (number string after the e)
        // but should be accepted if we are just passed "0" 
        // as a number before the "e"
        if (decimalIsPresent && str === "0") {
            // this logical gate does nothing, other then to gloss over the 
            // next logical check if line 58 passes
        } else if (
            str.length === 0 ||
            (str.length === 1 && !str.charAt(0).match('[0-9]'))
        ) {
            // this if statement checks for it the pre/post "e"
            // number strings are single length and only contain "."
            return false;
        }
        // if the number string passes all the logical check above 
        // we finally begin to loop though the string and make sure that 
        // is only contains ONE "." and the rest numbers
        // since we have trimmed the valid white space and 
        // and the valid +/-
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === "." && !decimalIsPresent) {
                decimalIsPresent = true;
            } else if (str.charAt(i) === "." && decimalIsPresent) {
                return false;
            } else if (!(str.charAt(i).match('[0-9]'))) {
                return false;
            }
        }
        return true;
    }

    // edge case
    if (s === " ") { return false; }
    // trimming white space
    s = s.trim();

    if (s.includes("e")) {
        // here I am splitting the string into an array of 
        // two string numbers
        let arr = s.split("e");

        // if there occurs more than one "e" our arr length will not 
        // 2 => invalid number passes
        if (arr.length != 2) { return false; }

        // this if checks if we were passed a string number that 
        // did not have content before or after the single "e" in the 
        // given string
        if (arr[1] === "" || arr[0] === "") { return false; }

        // now we can pass both string numbers into the helper function
        // with the post "e" string number decimalIsPresent = true
        // since is it not valid for decimals to occur after
        // "e" for the exponent string number
        return isNumber(arr[0]) && isNumber(arr[1], true);
    }

    // if an "e" does not occur we can just run the 
    // helper function on the given string
    return isNumber(s);
    /**
     * Runtime: 108 ms, faster than 67.42% of JavaScript online submissions for Valid Number.
     * Memory Usage: 41.3 MB, less than 29.55% of JavaScript online submissions for Valid Number.
     */
};