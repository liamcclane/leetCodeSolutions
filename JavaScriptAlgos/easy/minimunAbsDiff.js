/**1200. Minimum Absolute Difference
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {

    let min, len = arr.length;
    let dict = {}, ans = [];

    const helper = (i, j, x) => {
        let inner = [];
        inner.push(x[i]);
        inner.push(x[j]);
        ans.push(inner);
    }


    for (let i = 0; i < len; i++) {
        let subArr = arr.map((ele, ind) => {
            // if(i == ind) {return "*";}
            return arr[i] - ele;
        })
        dict[i] = subArr;
    }
    // console.log(dict);
    for (let key in dict) {
        let val = dict[key];
        let l = val.length;
        for (let i = 0; i < l; i++) {
            if (!min || (val[i] > 0 && val[i] < min)) {
                min = val[i];
            }
        }
    }
    // console.log(min);

    for (let key in dict) {
        let val = dict[key];
        if (val.includes(min)) {
            let j = val.indexOf(min, key - 1);
            helper(key, j, arr);
            // while(j != -1){
            //     j = val.indexOf(min,j+1);
            // }
        }
    }

    return ans;
};
/**tags for later look up
 * unfinished
 */