/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = [];
    for (let i=left; i<=right; i++) {
        if(i%10==0){
            continue;
        } else if(i>10) {
            console.log(Math.floor(i/10));
        } else {
            ans.push(i);
        }
        // let strI = i.toString();
        // console.log(strI);
    }
    return ans;
};
console.log(selfDividingNumbers(1,22));