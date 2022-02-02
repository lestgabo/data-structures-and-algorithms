/**
 ** 20. Valid Parentheses
 ** Easy
 ** https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.


 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true

 

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.


 */

const valid = (s) => {
    /**
     * use stack
     * have a stack to put the partner of the current character
     * by the end of the pass the input string is valid iff the stack is empty
     * the trick is:
     *  - check the last parentheses (char) in the stack and 
     *    compare it with the current char being iterated
     *  - if the chars are paired, we pop or remove from the top of stack that
     *    char to close the bracket and continue the iteration -> dont push to stack 
     *  - if NOT paired, we push the char into the stack
     *  - basically, we are only pushing OPENING brackets into the stack
     *    and if a closing bracket is found that doesn't pair up with 
     *    the current top of stack then we just end the loop and return false 
     *    but if we make it all the way to the end and our stack is empty we return true
     *  
     */

    // LIFO
    let myStack = [];
    let N = s.length;
    for (let i = 0; i < N; i++) {
        let char = s[i];
        let topOfStack = myStack[myStack.length -1];
        // console.log('topOfStack: ', topOfStack);
        if (char === ')' || char === '}' || char === ']') {
            if (topOfStack === '(' && char === ')' || 
                topOfStack === '{' && char === '}' || 
                topOfStack === '[' && char === ']') {
                myStack.pop();
            } else {
                return false;
            }
        } else {
            myStack.push(char);
        }
        // console.log('after topOfStack: ', topOfStack)
    }
    // return true if our stack is empty
    return Array.isArray(myStack) && !myStack.length? true : false; 
};

// const s = '()[]}';
// const s = '()[]{';
// const s = '(])'; // false
// const s = ')(){}'; // false
// const s = '([}}])'; // false
// const s = ']'; // false
// const s = '';
// const s = '{[]}'; // true
// const s = '(]'; // false
// const s = '{}'; // true
// const s = '()[]{}' // true;
console.log(valid(s));
