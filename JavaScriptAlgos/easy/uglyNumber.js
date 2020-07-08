/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    let arr = [];
    let numCopy = num;
    for (let i = 2; i <= num; i++) {
        console.log(i);
        while (numCopy % i === 0 && numCopy > 0) {
            numCopy = numCopy / i;
            arr.push(i);
        }
    }
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 2 ||
            arr[i] === 3 ||
            arr[i] === 5) {
                // console.log("herer")
            arr[i] = 0;
        }
    }
    console.log(arr);
    for (let val of arr) {
        if (val != 0) return false
    }
    return true;
};
// console.log(isUgly(8));
// console.log();
// console.log(isUgly(6));
// console.log();
// console.log(isUgly(14));

function isUgly2(num){
    if(num<=0)return false;
    if(num===1)return true;
    let arr = [];
    let numCopy = num;
    for (let i = 2; i <=numCopy; i++) {
        // console.log(i);
        while (numCopy % i === 0 && numCopy > 0) {
            numCopy = numCopy / i;
            arr.push(i);
        }
        if(numCopy === 0) break;
    }
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 2 ||
            arr[i] === 3 ||
            arr[i] === 5) {
                // console.log("herer")
            arr[i] = 0;
        }
    }
    console.log(arr);
    for (let val of arr) {
        if (val != 0) return false
    }
    return true;
}
// console.log(isUgly2(8));
// console.log();
// console.log(isUgly2(6));
// console.log();
console.log(isUgly(937351770));
console.log();
console.log(isUgly(1369479539));