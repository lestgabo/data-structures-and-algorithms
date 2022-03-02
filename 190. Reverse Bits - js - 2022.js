/**
 ** 190. Reverse Bits
 ** Easy
 ** https://leetcode.com/problems/reverse-bits/
 * 
Reverse bits of a given 32 bits unsigned integer.

Note:
    Note that in some languages, such as Java, there is no unsigned integer type. 
    In this case, both input and output will be given as a signed integer type. 
    They should not affect your implementation, as the integer's internal binary 
    representation is the same, whether it is signed or unsigned.
    In Java, the compiler represents the signed integers using 2's complement notation. 
    Therefore, in Example 2 above, the input represents the signed integer -3 and 
    the output represents the signed integer -1073741825.

Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents 
the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

Example 2:

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents 
the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.


Constraints:
    The input must be a binary string of length 32
Follow up: If this function is called many times, how would you optimize it?
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

const reverseBits = (n) => {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        // take the right most bit of n
        let lastBit = n & 1;
        // shift our last bit to the left (0 bits are shifted or padded from the right, 101 becomes 101000 if i = 28)
        let reversedLastBit = lastBit << (31 - i);
        // insert reversed last bit into result
        result += reversedLastBit; 
        // next iteration needed, so drop the right most bit of n to work on next bit
        n >>>= 1;
    }
    // fills the left most bit with 0, turns our number into unsigned
    return result >>> 0;
};

// Input: n = 00000010100101000001111010011100
Input: n = 43261596
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents 
// the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

// let num = '00000010100101000001111010011100'.toString(2);
console.log(reverseBits(n));
