/**
 ** 91. Decode Ways
 ** Medium
 ** https://leetcode.com/problems/decode-ways/
 
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...

'Z' -> "26"

To decode an encoded message, all the digits must be grouped then mapped back into letters 
using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

    "AAJF" with the grouping (1 1 10 6)
    "KJF" with the grouping (11 10 6)

Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.


Example 1:

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:

Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").


Constraints:

    1 <= s.length <= 100
    s contains only digits and may contain leading zero(s).
 */

/**
 * @param {string} s
 * @return {number}
 */

const numDecodings = (s) => {
  /**  
   * use DP 
   * - our dp needs to look 2 places back
   * - the first code will always be 1, but the 2nd needs to look back 2x
   *   therefore we need to start with a buffer as our first index to be 1 in the DP
   *   this will allow the second number to be able to look back 2x
   * 
   * - need a code converter? I dont think so, can just use the 
   *   numbers to check if a letter is possible on look back
   *
   */ 
  
  // edge
  if (s[0] === "0") return 0;

  let n = s.length;
  // very important to initialize the DP size and just fill with 0s
  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 1; i < n; i++) {
    //   console.log('i : ', i )
    //   console.log('s[i] : ', s[i] )
    //   console.log('dp[i] : ', dp[i] )
    //   console.log('dp[i + 1] before : ' ,dp[i + 1])

      // check if first number is not 0, then are able to add the answer before us 
      if (s[i] !== "0") {
          // dp i+1 because we added buffer first index, dp[i] is 1lookback
          dp[i + 1] += dp[i];
      }
      // need to check if the 2lookback is a valid 2digit letter -> 10-26
      let twoDigit = parseInt(s.substring(i - 1, i + 1), 10)

      if (twoDigit >= 10 && twoDigit <= 26) {
          dp[i + 1] += dp[i - 1];
      }

    //   console.log('twoDigit: ' ,twoDigit)
    //   console.log('twoDigit >= 10 && twoDigit <= 26: ' ,twoDigit >= 10 && twoDigit <= 26)
    //   console.log('dp[i + 1]: ' ,dp[i + 1])
    //   console.log('dp[i - 1]: ' ,dp[i - 1])
    //   console.log('************')
  }
  
//   console.log('dp: ' ,dp)

  // the last index of dp should be all the possible ways to "decode" the numbers
  return dp[n]
};


Input: s = "106"
Output: 1

// Input: s = "06"
// Output: 0

// Input: s = "12"
// Output: 2

console.log(numDecodings(s));
