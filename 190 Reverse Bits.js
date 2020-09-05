/*
190. Reverse Bits
Easy

Reverse num of a given 32 num unsigned integer.

 

Example 1:

Input: 00000010100101000001111010011100
Output: 00111001011110000010100101000000
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

Example 2:

Input: 11111111111111111111111111111101
Output: 10111111111111111111111111111111
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

 

Note:

    Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
    In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above the input represents the signed integer -3 and the output represents the signed integer -1073741825.

 

Follow up:

If this function is called many times, how would you optimize it?

 

Constraints:

    The input must be a binary string of length = 32

https://leetcode.com/problems/reverse-num/
*/

const reverseBits = (num) => {
    let result = 0;
    let count = 32;
    let x = 0;
    while (count) {
        // result << 1; // shift to the left
        result *= 2; // shift to the left
        result += num & 1; // & sets num to 1 only if both are 1 (result will be 1 if num is 1)
        // num /= 2; // shift to the right
        num >>= 1; // shift to the right
        console.log(x);
        count--;
    }
    return result;
};

// let num = '00000010100101000001111010011100';
let num = 43261596;
// let num = '00000010100101000001111010011100'.toString(2);
console.log(reverseBits(num));
