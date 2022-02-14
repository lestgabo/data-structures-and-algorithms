/**
 ** 76. Minimum Window Substring
 ** Hard
 ** https://leetcode.com/problems/minimum-window-substring/

Given two strings s and t of lengths m and n respectively, 
return the minimum window substring of s such that every character in t 
(including duplicates) is included in the window. 
If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.


Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.


Constraints:

    m == s.length
    n == t.length
    1 <= m, n <= 105
    s and t consist of uppercase and lowercase English letters.
 
Follow up: Could you find an algorithm that runs in O(m + n) time?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 
const minWindow = (s, t) => {
    let tSet = new Set(t);

    if (s.length === 0 || s === "") return "";
    if (t.length > s.length) return "";
  
    let left = 0;
    let right = s.length - 1;
    let minimumWindow = "";

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let window = s.slice(left, right+1);
        let tempT = t.split('');

        // console.log('char: ', char)
        // console.log('left: ', left)
        // console.log('window: ', window)
        // console.log('minimumWindow: ', minimumWindow)
        // console.log('tempT: ', tempT)

        // check for t inside window substring
        for (let j = 0; j < window.length; j++) {
            let windowChar = window[j];

            console.log('windowChar: ', windowChar)
            console.log('tempT.includes(windowChar): ', tempT.includes(windowChar))

            if (tempT.includes(windowChar)) { 
                tempT.splice(tempT.indexOf(windowChar), 1);
            }

            console.log('tempT during:' ,tempT)
        }

        console.log('tempT after: ', tempT)

        if (Array.isArray(tempT) && !tempT.length) {
            // t is found inside window substring so it counts
           
            // console.log('window.length <= minimumWindow:' , window.length <= minimumWindow.length)
            // there was a t inside a sunbstring and we are setting minWindow as size s
            minimumWindow = s;
            if (window.length <= minimumWindow.length) minimumWindow = window;
        }

        left++;

        // console.log('minimumWindow: ', minimumWindow)
        // console.log('*****************')
    }
    return minimumWindow;
};

Input: s = "ab", t = "b"
// Input: s = "a", t = "b"
// Input: s = "a", t = "aa"
// Input: s = "a", t = "a"
// Input: s = "ADOBECODEBANC", t = "ABC"
console.log(minWindow(s, t));
