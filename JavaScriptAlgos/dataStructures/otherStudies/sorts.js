/**
 * 
 * @param {number[]} arr an array of unsorted values which may or may not contain duplicates
 */
const bubbleSort = (arr) => {
    let ans = []; // this is the answer we will return 
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {

        }
    }
}

const insertionSort = arr => {

}

const radicSort = arr => {
    var sortByPowerOf = (a, ten) => {
        var startBucket = () => {
            for (let i = 0; i < 10; i++) { bucket.push(0); }
        }
        var fillBucket = () => {
            for (let i = 0; i < a.length; i++) {
                let targetInt = a[i] % ten;
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
        var emptyBucket = () => {
            for (let i = 0; i < a.length; i++) {
                for (let i = 0; i < a.length; i++) {
                    let targetInt = a[i] % ten;
                    targetInt = Math.floor(targetInt / (ten / 10));
                    console.log(`element: ${a[i]}  targetInt: ${targetInt}`);
                    console.log(`bucket ${bucket}`);
                    console.log(`a\t\t\t   ${a}`);
                    console.log(`semiSortedCopy ${semiSortedCopy}`);
                    console.log();
                }
            }
        }
        // console.log(a);
        // console.log(ten);
        let bucket = [];
        let semiSortedCopy = a;
        startBucket();
        fillBucket();
        console.log(bucket);
        emptyBucket();
        return semiSortedCopy;
    }
    let max = Math.max(...arr);
    max = max.toString().length;
    let ansArr = arr;
    for (let i = 0, ten = 10; i < max; i++, ten *= 10) {
        ansArr = sortByPowerOf(ansArr, ten);
    }
    // let semiSorted = arr;
    // semiSorted = sortByPowerOf()

}
let ex1 = [99, 999, 11, 430, 5525, 23, 44, 87, 86, 263, 457, 988, 888, 634, 2, 420, 200, 201];
let ex1Copy = [99, 999, 11, 430, 5525, 23, 44, 87, 86, 263, 457, 988, 888, 634, 2, 420, 200, 201];
ex1Copy.sort((a, b) => a - b);
console.log(ex1);
console.log(ex1Copy);
radicSort(ex1);