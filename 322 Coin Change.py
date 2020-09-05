# dynamic programming

from typing import List


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # for every iteration over coins. we iterate over the amount

        dp = [0] + [float('inf') for i in range(amount)]
        # print(dp)
        for i in range(1, amount+1):
            # print(i)
            for coin in coins:
                # print('i - coin', i - coin)
                if (i - coin >= 0):
                    # print('dp[i-coin]', dp[i-coin])
                    dp[i] = min(dp[i], dp[i-coin] + 1)
            # print('dp:  ', dp)

        if dp[-1] == float('inf'):
            return -1

        return dp[-1]


sol = Solution()
print(sol.coinChange([4, 3, 5], 2))

# time is O(n*amount) -> number of coins * amount
# space O(amount) -> size of range(len(amount))
