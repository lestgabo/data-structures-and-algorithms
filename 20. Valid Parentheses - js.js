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
     */

    let shouldBeEmptyStack = [];

    s.split('').forEach((char) => {
        let topOfStack = shouldBeEmptyStack[shouldBeEmptyStack.length - 1];

        // console.log('***** NEW ITERATION *****');

        // add to stack if left side
        if (char === '[') {
            shouldBeEmptyStack.push(char);
        } else if (char === '{') {
            shouldBeEmptyStack.push(char);
        } else if (char === '(') {
            shouldBeEmptyStack.push(char);
        } else {
            // pop out of stack if right side
            if (topOfStack === '[' && char === ']') {
                shouldBeEmptyStack.pop();
            } else if (topOfStack === '{' && char === '}') {
                shouldBeEmptyStack.pop();
            } else if (topOfStack === '(' && char === ')') {
                shouldBeEmptyStack.pop();
            } else {
                // not legal
                shouldBeEmptyStack.push(char);
            }
        }

        // console.log('char: ', char);
        // console.log('topOfStack: ', topOfStack);

        // console.log('shouldBeEmptyStack: ', shouldBeEmptyStack);
    });

    // return false if stack is not empty
    return shouldBeEmptyStack.length > 0 ? false : true;
};

// const s = '()[]}';
// const s = '()[]{';
// const s = '(])'; // false
// const s = ')(){}'; // false
// const s = '([}}])'; // false
const s = ']'; // false
// const s = '';
// const s = '{[]}'; // true
// const s = '(]'; // false
// const s = '{}';
// const s = '()[]{}';
console.log(valid(s));
