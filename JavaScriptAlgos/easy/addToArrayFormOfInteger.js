/**989. Add to Array-Form of Integer
 * For a non-negative integer X, the array-form of X 
 * is an array of its digits in left to right order.  
 * For example, if X = 1231, then the array form is [1,2,3,1].
 * 
 * Given the array-form A of a non-negative integer X, 
 * return the array-form of the integer X+K.
 * 
 * Example 1:
 * Input: A = [1,2,0,0], K = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 * 
 * Example 2:
 * Input: A = [2,7,4], K = 181
 * Output: [4,5,5]
 * Explanation: 274 + 181 = 455
 * 
 * Example 3:
 * Input: A = [2,1,5], K = 806
 * Output: [1,0,2,1]
 * Explanation: 215 + 806 = 1021
 * 
 * Example 4:
 * Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
 * Output: [1,0,0,0,0,0,0,0,0,0,0]
 * Explanation: 9999999999 + 1 = 10000000000
 * 
 * Note：
 * 
 * 1 <= A.length <= 10000
 * 0 <= A[i] <= 9
 * 0 <= K <= 10000
 * If A.length > 1, then A[0] != 0
 * 
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayFormBest = (A, K) => {
    let KnumArr = Array.from(K.toString()).map(x => Number(x));
    let ans = [];
    // console.log(KnumArr);
    // console.log(A);

    // this while loop adds to the ans array, while adding the other 
    // two arrays together 
    let i = KnumArr.length - 1, j = A.length - 1;
    while (i >= 0 || j >= 0) {
        if (i < 0) {
            ans.push(A[j]);
        } else if (j < 0) {
            ans.push(KnumArr[i]);
        } else {
            ans.push(KnumArr[i] + A[j]);
        }
        i--, j--;
    }
    // console.log(ans);

    // this for loop checks to see if we should move 
    // the placement of numbers when "adding"
    let l = ans.length;
    for (let i = 0; i < l; i++) {
        // if the element is greater than 10
        // we need to subtract 10 and add "1" to the next placement
        if (ans[i] >= 10) {
            ans[i] -= 10;
            // this check below take into account of making a whole new row 
            // if we are out of bounds
            if (i + 1 >= l) {
                ans.push(1);
            } else {
                ans[i + 1] += 1;
            }
        }
    }
    // console.log(ans);

    // this for loop reverse the ans arr
    l = ans.length - 1;
    for (let front = 0, back = l; front <= back; front++, back--) {
        // the swap on line 82 is not working for some reason
        // [ans[front], ans[back]] = [ans[back], ans[front]];
        let temp = ans[front];
        ans[front] = ans[back];
        ans[back] = temp;
    }

    return ans;
}
/**
 * Runtime: 148 ms, faster than 58.39% of JavaScript online submissions for Add to Array-Form of Integer.
 * Memory Usage: 44.2 MB, less than 10.77% of JavaScript online submissions for Add to Array-Form of Integer.
 */
console.log(addToArrayFormBest([1, 2, 0, 0], 34)); // 1234
console.log(addToArrayFormBest([1, 2], 345)); // 357
console.log(addToArrayFormBest([9, 9, 9, 9, 8], 765));//100763
console.log(addToArrayFormBest([9, 9, 9], 765));//1764

/**
 * Runtime: 232 ms, faster than 14.09% of JavaScript online submissions for Add to Array-Form of Integer.
 * Memory Usage: 43.8 MB, less than 12.31% of JavaScript online submissions for Add to Array-Form of Integer.
 */
var addToArrayFormBadBalanced = (A, K) => {
    let KnumArr = Array.from(String(K, A.length)).map(x => Number(x));
    // console.log(KnumArr);
    // console.log(A);
    let ans = [];
    let i = KnumArr.length - 1, j = A.length - 1;
    while (i >= 0 || j >= 0) {
        if (i < 0) {
            ans.unshift(A[j]);
        } else if (j < 0) {
            ans.unshift(KnumArr[i]);
        } else {
            ans.unshift(KnumArr[i] + A[j]);
        }
        i--, j--;
    }
    // console.log(ans);
    let l = ans.length - 1;
    for (let k = l; k >= 0; k--) {
        if (ans[k] >= 10) {
            ans[k] = ans[k] - 10;
            if (k - 1 < 0) {
                ans.unshift(1);
            } else {
                ans[k - 1] += 1;
            }
        }
        // console.log(ans);
    }

    return ans;
}

/**
 * Runtime: 332 ms, faster than 5.37% of JavaScript online submissions for Add to Array-Form of Integer.
 * Memory Usage: 43.4 MB, less than 29.23% of JavaScript online submissions for Add to Array-Form of Integer.
 */
var addToArrayFormSlow = (A, K) => {
    let KnumArr = Array.from(K.toString()).map(x => Number(x));
    console.log("checking out the arrays")
    console.log(KnumArr);
    console.log(A);
    // A and KnumArr are both of type number[]

    // this while loop moves from back to front unshift()-ing to our
    // array, other wise it goes in "backwards"
    let ans = [];
    let i = KnumArr.length - 1, j = A.length - 1;
    console.log("the while loop adding");
    while (i >= 0 || j >= 0) {
        if (i < 0) {
            ans.unshift(A[j]);
        } else if (j < 0) {
            ans.unshift(KnumArr[i]);
        } else {
            ans.unshift(KnumArr[i] + A[j]);
        }
        i--, j--;
        // by loging here we can see the ans being added to
        console.log(ans);
    }
    console.log("end of while ans looks like")
    console.log(ans);
    console.log("**********");
    /**
     * our ans arr looks kinda like this [2,13,14,17]
     * when it needs to look like this [3,4,5,7]
     */
    /**
     * this for loop
     * we step backwards to see if we need to "add" to the column in front
     * aka to the 10's column or the 1,000's column and carry-over
     * back from when we had to do addition in primary school
     * got it
     * line 200 takes into account creating a new column 
     * ie [10,9,9,9] => [1,0,9,9,9]
     * then line 203 just adds to the next "whatever" ya know lol I am losing my vocab :)
     */
    let l = ans.length - 1;
    console.log("the mathy for loop")
    for (let k = l; k >= 0; k--) {
        if (ans[k] >= 10) {
            ans[k] = ans[k] - 10;
            if (k - 1 < 0) {
                ans.unshift(1);
            } else {
                ans[k - 1] += 1;
            }
        }
        console.log(ans);
    }
    return ans;
}
/**
 * important examples for me were
 */
// // one where A is longer
// console.log(addToArrayFormSlow([1,2,0,0] , 34))

// // one where K is "longer"
// console.log()
// console.log(addToArrayFormSlow([1,2,3] , 34000)); // [3,4,1,2,3]

// one where there is carrying over at the end
console.log()
console.log(addToArrayFormSlow([9, 9, 9, 9, 6, 7], 568));






/**not working for larger number examples */
var addToArrayFormLia = (A, K) => {
    const whatAmI = (x) => { console.log(`${x} is of type ${typeof x}`) };
    let Astr = "";
    for (let val of A) {
        Astr += val.toString();
    }

    let Anum = Number(Astr);
    // whatAmI(Anum);

    let rnt = Anum + K;
    // whatAmI(rnt);

    let rntStr = rnt.toString();
    // whatAmI(rntStr);

    let rntArr = [];
    for (let letter of rntStr) {
        rntArr.push(Number(letter));
    }
    // console.log(rntArr);
    return rntArr;
}
// console.log(addToArrayFormLia([1,2,0,0], 34));
// console.log(addToArrayFormLia([1,2,0,0,6,7,8,9,3,9,9,0,0,0,0,0,0,0,0],34));

var addToArrayForm = function (A, K) {
    let num = 1;
    for (let i = A.length - 1; i >= 0; i--) {
        if (A[i] != 0) {
            console.log(A[i]);
            K += num * A[i];
            console.log(K);
            num *= 10;
        } else {
            // console.log(num);
            num *= 10;
        }
    }
    console.log(A.length);
    let ans = Array.from(String(K, A.length));
    return ans;

};

var addToArrayForm2 = function (A, K) {
    let num = Array.from(String(K, A.length));
    console.log(num);
    let len = 0;
    let j = 0;
    if (num.length <= A.length) {
        len = num.length - 1;
        j = A.length - 1;
    } else {
        len = A.length - 1;
        j = num.length - 1;
    }
    console.log(len + ", j: " + j);
    for (let i = len; i >= 0; i--, j--) {
        console.log(num[i] + " - " + A[j])
        A[j] = parseInt(num[i]) + A[j];
        console.log(num[i] + " - " + A[j])
    }



    // console.log(A.length);
    return A;
};

// example 1: 
// answer: works with addToArrayForm and addToArrayForm2 [1,2,3,4]
// console.log(addToArrayForm([1, 2, 0, 0], 34));

// example 2: 
// answer: works with addToArrayForm only [4,5,5]
// console.log(addToArrayForm([2,7,4], 181));

// example 3: 
// answer: works with addToArrayForm only [1,0,2,1]
// console.log(addToArrayForm([2,1,5], 806));

// example 4: 
// answer: works with addToArrayForm only [1,0,0,0,0,0,0,0,0,0,0] 
// console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1));


/**tags to look up later
 * unfinished
 * runtime error
 * large input error
 * multiple functions
 */