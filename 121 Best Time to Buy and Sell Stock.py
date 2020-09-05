"""
121. Best Time to Buy and Sell Stock
Easy

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

"""
from typing import List


class Solution:
    def buyAndSell(self, prices: List[int]) -> int:
        curr_sum = 0
        if not prices:
            return curr_sum
        smallest = prices[0]

        for price in prices:
            if price <= smallest:
                smallest = price
            curr_sum = max(curr_sum, price-smallest)

        return curr_sum

    # brute force
    # def buyAndSell(self, prices: List[int]) -> int:
    #     # print(prices)
    #     # print(len(prices))
    #     curr_sum = 0
    #     for i in range(len(prices)):
    #         # print('i', i)
    #         for j in range(i+1, len(prices)):
    #             # print('i', i)
    #             # print('j', j)
    #             curr_sum = max(curr_sum, prices[j]-prices[i])

    #     if curr_sum < 0:
    #         return 0

    #     return curr_sum


sol = Solution()
prices = []
# prices = [7, 1, 5, 3, 6, 4]
# prices = [7, 6, 4, 33, 222]
print(sol.buyAndSell(prices))
