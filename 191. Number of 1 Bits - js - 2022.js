/**
 ** 191. Number of 1 Bits
 ** Easy
 ** https://leetcode.com/problems/number-of-1-bits/
 * 
Write a function that takes an unsigned integer and returns the number of '1' bits 
it has (also known as the Hamming weight).

Note:
    Note that in some languages, such as Java, there is no unsigned integer type. 
    In this case, the input will be given as a signed integer type. 
    It should not affect your implementation, as the integer's internal binary 
    representation is the same, whether it is signed or unsigned.
    In Java, the compiler represents the signed integers using 2's complement notation. 
    Therefore, in Example 3, the input represents the signed integer. -3.


Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

Example 2:

Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

Example 3:

Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 

Constraints:
    The input must be a binary string of length 32.
Follow up: If this function is called many times, how would you optimize it?
*/

const numberOf1Bits = (n) => {
    /**
     * - shift right most bit of n into variable
     * - & that bit with a 1, if the result is a 1 (1&1 = 1; 0&1=0) then we found a 1 bit
     * - increment a counter when a 1 bit is found
     * - shift out the already counted last bit of n to update it until n becomes 0
     */
    let counter = 0;

    while (n != 0) {
        let lastBit = n & 1;
        // console.log('lastBit: ', lastBit)
        // 1&0 = 0 and 1&1 = 1
        if (lastBit === 1) counter += 1;
        // update n with its last bit shifted out to the right, padding a 0 on the left most bit
        n >>>= 1;
        // console.log('n: ', n)
    }

    return counter;
};

// let n = parseInt('00000000000000000000000000001011', 2);
let n = parseInt('1101', 2);
// let n = parseInt('11111111111111111111111111111101', 2);
console.log(numberOf1Bits(n));
