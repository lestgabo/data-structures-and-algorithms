/**
 ** 121. Best Time to Buy and Sell Stock
 ** Easy
 ** https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit =  (prices) => {
    /**
     * - do one pass -> just iterate normally
     * - have a  minimum for bought which checks if minimum is lesser than current day
     * - minimum updates only if current day has a lower price
     * - also have a maximum for keeping track of max profit
     * - max is compared with current price minus current min
     *   (calculate before updating for new min)
     */
    let min = Math.min();
    let max = Math.max();

    // edge
    if (prices.length === 1) return 0;

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        let profit = price - min;
        min = Math.min(min, price);
        max = Math.max(max, profit);

        // console.log('min: ', min)
        // console.log('max: ', max)
        // console.log('******')
    }

    return max > 0 ? max : 0;
};

// let nums = [7, 1, 5, 3, 6, 4];
let nums = [7,6,4,3,1]
console.log(maxProfit(nums));
