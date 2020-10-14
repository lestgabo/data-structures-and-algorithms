/**
 * 322. Coin Change
Medium

You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Note:
You may assume that you have an infinite number of each kind of coin.

https://leetcode.com/problems/coin-change/
 */

/**
 * @param {array} coins
 * @param {integer} amount
 * @returns {integer} fewest combination of coins
 */
const coinChange = (coins, amount) => {
    // init dp array
    let dp = [];
    for (let i = 0; i < amount + 1; i++) {
        dp.push(amount + 1);
    }
    dp[0] = 0;
    // go through each coin
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        // go through the dp array
        for (let j = coin; j < amount + 1; j++) {
            dp[j] = Math.min(dp[j], dp[j - coin] + 1);
        }
    }

    if (dp[dp.length - 1] === amount + 1) {
        return -1;
    } else {
        return dp[dp.length - 1];
    }
};

let coins = [2, 5];
// let coins = [5];
// let coins = [1, 2, 5];
let amount = 11;
console.log(coinChange(coins, amount));
