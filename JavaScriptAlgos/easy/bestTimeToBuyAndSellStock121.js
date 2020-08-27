/**Best Time to Buy and Sell Stock 121
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * 
 * If you were only permitted to complete at most one transaction 
 * (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * 
 * Note that you cannot sell a stock before you buy one.
 * 
 * Example 1:
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *              Not 7-1 = 6, as selling price needs to be larger than buying price.
 * 
 * 
 * Example 2:
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * @param {number[]} arr
 * @returns {number} your profit from the given stock market array
 */
const stockProfit = arr => {

    /**
     * 
     * @param {number[]} x 
     * @returns {boolean} whether the arr x is strictly decreasing or not
     */
    const isStrictlyDecreasing = x => {
        for(let i = 0; i < x.length; i++) {
            
        }
    }

    let sellPrice = 0, buyPrice = 0, profit = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let curr = arr[i], next = arr[i + 1];
        if (next > curr && buyPrice < next) {
            buyPrice = next;
        }
        if (next < curr && sellPrice > curr) {
            sellPrice = curr;
        }
    }
    console.log(`sellPrice : ${sellPrice}`);
    console.log(`buyPrice : ${buyPrice}`);
    profit = sellPrice - buyPrice;

    return profit;
}

console.log(stockProfit([7, 6, 4, 3, 1]));
/**tags to look up later
 * unfinished
 * helperFunction?
 */