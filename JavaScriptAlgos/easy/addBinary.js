/**Add Binary 67
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let arrA = Array.from(a).map(x => Number(x));
    let arrB = Array.from(b).map(x => Number(x));
    let arrAns = [], ans = "";

    // console.log(arrA);
    // console.log(arrB);

    // this while loop fills out arrAns to the ends of both input arrays BACKWARDS
    let indA = a.length - 1, indB = b.length - 1;
    while (indA >= 0 || indB >= 0) {
        if (indA < 0) {
            arrAns.push(arrB[indB]);
        } else if (indB < 0) {
            arrAns.push(arrA[indA]);
        } else {
            arrAns.push(arrA[indA] + arrB[indB]);
        }
        indA--;
        indB--;
    }
    // console.log("end of while")
    // console.log(arrAns);

    // out arrAns is BACKWARDS, so we loop via looking if we should
    // "add" to the placement in front
    let l = arrAns.length;
    for (let i = 0; i < l; i++) {
        if (arrAns[i] >= 2) {
            if(arrAns[i] == 2) arrAns[i] = 0;
            if(arrAns[i] == 3) arrAns[i] = 1;
            if (i + 1 >= l) { arrAns.push(1) } // this line deals with having to "add" a new tens column
            else { arrAns[i+1] += 1; }
        }
    }

    // now we reverse the array
    l = arrAns.length - 1;
    for(let front = 0, back = l; front <= back; front++, back--) {
        let temp = arrAns[front];
        arrAns[front] = arrAns[back];
        arrAns[back] = temp;
    }

    // now we are filling in the string to return from the function
    for(let val of arrAns) {
        ans += val.toString();
    }
    return ans;
};
/**
 * Runtime: 152 ms, faster than 7.03% of JavaScript online submissions for Add Binary.
 * Memory Usage: 39.5 MB, less than 9.33% of JavaScript online submissions for Add Binary.
 */
console.log(addBinary("1111", "1111"));

/**tags to look up later
 * refactorMe
 */