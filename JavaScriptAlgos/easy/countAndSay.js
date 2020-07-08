/**
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. 
 * You can do so recursively, in other words from the previous member read off the digits, 
 * counting the number of digits in groups of the same digit.
 * Note: Each term of the sequence of integers will be represented as a string.
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221 
 * 6.     312211
 * 7.     13112221
 * 8.     1113213211
 * 9.     31131211131221
 * 10.    13211311123113112211
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  return countNsay(n);
};

function countNsay(count, str) {
  if (!str) { str = "1"; }
  if (count === 0) { return "0"; }
  if (count === 1) { return str; }

  let char = str[0];
  let charCount = 1;
  let newStr = "";
  for (let i = 1; i < str.length; i++) {
    if (char === str[i]) {
      charCount++;
    } else {
      newStr += charCount + "" + char;
      char = str[i];
      charCount = 1;
    }
  }
  newStr += charCount + "" + char;
  return countNsay(count - 1, newStr);
}
for(let val of [1,2,3,4,5,6,7]){
  console.log(`${val}.\t${countAndSay(val)}`);
  console.log();
}