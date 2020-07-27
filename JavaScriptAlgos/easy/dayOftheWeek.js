/**1185. Day of the Week
 * Given a date, return the corresponding day of the week for that date.
 * 
 * The input is given as three integers representing the day, month and year respectively.
 * 
 * Return the answer as one of the following values 
 * {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
 * 
 * Example 1:
 * Input: day = 31, month = 8, year = 2019
 * Output: "Saturday"
 * 
 * Example 2:
 * Input: day = 18, month = 7, year = 1999
 * Output: "Sunday"
 * 
 * Example 3:
 * Input: day = 15, month = 8, year = 1993
 * Output: "Sunday"
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        str = "" + month + "/" + day + "/" + year + " 00:00:30";
    let blah = new Date(str);
    let w = blah.getDay();
    return arr[w];
};
dayOfTheWeek(15, 8, 1993);

/**
 * Runtime: 88 ms, faster than 24.14% of JavaScript online submissions for Day of the Week.
 * Memory Usage: 37 MB, less than 7.41% of JavaScript online submissions for Day of the Week.
 */