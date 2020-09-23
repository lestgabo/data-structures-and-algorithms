/**
 * 371. Sum of Two Integers
Medium

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3

Example 2:

Input: a = -2, b = 3
Output: 1

https://leetcode.com/problems/sum-of-two-integers/

source: https://www.geeksforgeeks.org/add-two-numbers-without-using-arithmetic-operators/
 */

const sumOfTwoIntegers = (a, b) => {
    // unitl no more carry
    while (b != 0) {
        // carry will now common set bits of a and b
        let carry = a & b;

        // sum of bits a and b
        a = a ^ b;

        // carry is shifted by one to the left (adds 0 on the very right)
        // adding carry to a gives required sum
        b = carry << 1;
    }
    return a;
};

let a = 1;
let b = 3;
console.log(sumOfTwoIntegers(a, b));
