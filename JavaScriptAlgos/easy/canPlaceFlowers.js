/**605. Can Place Flowers
 * Suppose you have a long flowerbed in which some of the plots are 
 * planted and some are not. However, flowers cannot be planted in 
 * adjacent plots - they would compete for water and both would die.
 * 
 * Given a flowerbed (represented as an array containing 0 and 1, 
 * where 0 means empty and 1 means not empty), and a number n, 
 * return if n new flowers can be planted in it without violating 
 * the no-adjacent-flowers rule.
 * 
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: True
 * 
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: False
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;
    let possibleFlowersToAdd = 0, len = flowerbed.length;
    if (len === 1 && flowerbed[0] === 0 && n == 1) return true;
    if (len <= n) return false;
    for (let i = 0; i < len; i++) {
        if (flowerbed[i] === 0) {
            if (i != 0 && i != len - 1) {
                if (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
                    possibleFlowersToAdd++;
                    i++;
                }
            } else if ((i === 0 && flowerbed[1] === 0) || (i === len - 1 && flowerbed[len - 2] === 0)) {
                possibleFlowersToAdd++;
                i++;
            }
        }
    }
    // console.log();
    // console.log(possibleFlowersToAdd);
    if (possibleFlowersToAdd >= n) return true;
    return false;
    /**
     * Runtime: 72 ms
     * Memory Usage: 37.1 MB
     */
};
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
// console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); // true 
// console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
// console.log(canPlaceFlowers([1], 0)); // true
// console.log(canPlaceFlowers([1, 0, 0], 1)); // true
// console.log(canPlaceFlowers([0, 1, 0], 1)); // false
console.log(canPlaceFlowers([0], 1)); // true







/****Didn't understand the algo****/
const wrongAgain2 = (flowerbed, n) => {
    if (n === 0) return true;
    let flowerCount = 0;
    let spaceCount = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) flowerCount++;
        else spaceCount++;
    }
    if (flowerCount === 1) {
        if (flowerbed.length <= n + 1 + 1) {
            return false;
        }
        return true;
    }
    if (spaceCount < (n * flowerCount) + 1) return false;
    return true;
}


const wrongAgain = (flowerbed, n) => {
    let countSpaces = 0;
    let hadPrevFlower = false;
    let spacesNeeded = n;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            countSpaces = 0;
            hadPrevFlower = true;
            spacesNeeded = ((n * 2) + 1);
        } else {
            countSpaces++;
        }
        if (countSpaces >= spacesNeeded) {
            return true;
        }
    }
    // console.log(`countSpaces${countSpaces}`);
    if (countSpaces >= n) { return true; }
    return false;
}




const wrong = (flowerbed, n) => {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] != 1) {
            let start = i - (n - 1), j = start;
            let end = i + (n - 1);
            let isValidSpot = true;
            if (j < 0) j = 0
            if (end > flowerbed.length) end = flowerbed.length;
            console.log(`i:${i} = start ${j}\t end ${end}`);
            while (j <= end) {
                if (flowerbed[j] != 0) {
                    console.log(`j : ${j}`)
                    isValidSpot = false;
                }
                j++;
            }
            if (isValidSpot) {
                console.log(`true i is ${i}`);
                return true;
            }
        }
    }
    return false;
}

/**tags to look up later
 */