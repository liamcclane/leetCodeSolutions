/**
 * 
 * @param {number[]} arr an array of unsorted values which may or may not contain duplicates
 */
const bubbleSort = (arr) => {
    let ans = []; // this is the answer we will return 
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}
// bubbleSort([3,4,55,2,1,0]);
/**Insertion sort
 * @param {*} arr 
 */
const insertionSort = arr => {
    const findMinReturnInd = (start) => {
        let min = arr[start];
        let ind = start;
        for (let i = start; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
                ind = i;
            }
        }
        return ind;
    }
    const swap = (x, y) => {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    let count = 0;
    while (count < arr.length) {
        swap(count, findMinReturnInd(count));
        count++;
    }
    console.log(arr);
}
// insertionSort([6, 3, 10, 2, 12, 55, 100, 98, 65]);

/**Radic Sort 
 * runs in O to the (largest exponent of ten of any single element)
 * @param {number[]} arr 
 * @returns {number[]} arr 
 */
const radicSort = arr => {
    let max = Math.max(...arr);
    max = max.toString().length;
    let ansArr = arr.map(x => 0);
    // console.log(ansArr);
    var sortByPowerOf = (ten) => {
        var startBucket = () => {
            for (let i = 0; i < 10; i++) { bucket.push(0); }
        }
        var fillBucket = () => {
            for (let i = 0; i < arr.length; i++) {
                let targetInt = arr[i] % ten;
                targetInt = Math.floor(targetInt / (ten / 10));
                // console.log(`element: ${a[i]}  targetInt: ${targetInt}`);
                bucket[targetInt]++;
            }
            // console.log("before we all them up");
            // console.log(bucket);
            for (let i = 1; i < bucket.length; i++) {
                bucket[i] += bucket[i - 1];
            }
            // console.log("after we all them up");
        }
        var emptyBucket = (ten) => {
            let fromArr = [];
            if (ten == 10) {
                fromArr = arr;
            } else {
                fromArr = ansArr.slice();
            }
            for (let i = fromArr.length - 1; i >= 0; i--) {
                let targetInt = fromArr[i] % ten;
                targetInt = Math.floor(targetInt / (ten / 10));
                bucket[targetInt]--;
                let indFromBucket = bucket[targetInt];
                // console.log(`element: ${fromArr[i]}  targetInt: ${targetInt} indFromBucket: ${indFromBucket}`);
                // console.log(`bucket ${bucket}`);
                // console.log(`formArr\t\t   ${fromArr}`);
                ansArr[indFromBucket] = fromArr[i];
                // console.log(`ansArr\t\t   ${ansArr}`);
                // console.log();
            }
            // arr = fromArr;
            // console.log();
        }
        let bucket = [];
        startBucket();
        fillBucket();
        // console.log(ten)
        // console.log(bucket)
        emptyBucket(ten);
    }
    for (let i = 0, ten = 10; i < max; i++, ten *= 10) {
        sortByPowerOf(ten);
        // console.log(`LINE 68: ansArr ${ansArr}`);
    }
    return ansArr;
}
let ex1 = [99, 999, 11, 430, 5525, 23, 44, 87, 86, 263, 457, 988, 888, 634, 2, 420, 200, 201];
let ex1Copy = [99, 999, 11, 430, 5525, 23, 44, 87, 86, 263, 457, 988, 888, 634, 2, 420, 200, 201];
ex1Copy.sort((a, b) => a - b);
// console.log(ex1);
// console.log(ex1Copy);
// console.log(radicSort(ex1));
// console.log(radicSort([3, 2, 1, 22, 45, 7]));


/**
 * 
 */
const binarySort = (arr) => {
    const helper = (lp, rp) => {
        console.log(`lp : ${lp}`);
        console.log(`arr[lp] : ${arr[lp]}`);
        console.log(`rp : ${rp}`);
        console.log(`arr[rp] ${arr[rp]}`);

    }
    let leftPointer = 0, rightPointer = arr.length - 1;
    while(leftPointer < rightPointer) {
        helper(leftPointer -= 1, rightPointer += 1);
    }

    console.log(arr);


}