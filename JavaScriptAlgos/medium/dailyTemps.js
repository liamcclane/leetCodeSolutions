/**739. Daily Temperatures
 * Given a list of daily temperatures T, return a list such that, 
 * for each day in the input, tells you how many days you would 
 * have to wait until a warmer temperature. If there is no future 
 * day for which this is possible, put 0 instead.
 * 
 * For example, given the list of temperatures 
 * T = [73, 74, 75, 71, 69, 72, 76, 73], 
 * your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 * 
 * Note: The length of temperatures will be in the range 
 * [1, 30000]. 
 * Each temperature will be an integer in the range [30, 100].
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let ansArr = [];

    for (let i = 0; i < T.length; i++) {
        let count = 0;
        for (let j = i; j < T.length; j++) {
            if (T[i] < T[j]) {
                ansArr.push(count);
                break;
            } else {
                count++;
            }
            if (j === T.length - 1) {
                ansArr.push(0);
            }
        }
    }
    // console.log(ansArr);
    return ansArr;
};
/**
 * Runtime: 1100 ms, faster than 20.10% of JavaScript online submissions for Daily Temperatures.
 * Memory Usage: 47.8 MB, less than 39.47% of JavaScript online submissions for Daily Temperatures.
 */


const dailyTemperaturesO = (T) => {
    let increDecre = [];

    for (let i = 0; i < T.length; i++) {
        if (T[i] < T[i + 1]) {
            increDecre.push("i");
        } else {
            increDecre.push("d");
        }
    }

    let copy = T.slice(0, T.length);
    let info = [];
    for (let i = 0; i < T.length; i++) {
        let obj = { Temperature: T[i], position: i };
        info.push(obj);
    }

    info.sort((a, b) => (a.Temperature - b.Temperature));

    for (let i = 0; i < info.length-1; i++) {
        let j = i + 1;
        if(info[i].position > info[j].position){
            
        }
    }
    copy[T.length - 1] = 0;

    console.log("info ", info);
    console.log("copy ", copy);
    // let max = Math.max(...T);
    console.log([1, 1, 4, 2, 1, 1, 0, 0], " answer");
}

console.log(dailyTemperaturesO([73, 74, 75, 71, 69, 72, 76, 73]));