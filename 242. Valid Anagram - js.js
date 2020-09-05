/**
 * 
 * 242. Valid Anagram
Easy

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

https://leetcode.com/problems/valid-anagram/
 */

const solution = (s, t) => {
    let s_hash = {};
    let t_hash = {};
    let s_array = [];
    let t_array = [];

    s_array = s.split('');
    t_array = t.split('');

    if (s_array.length !== t_array.length) return false;
    for (i in s) {
        if (s_hash[s_array[i]]) {
            s_hash[s_array[i]] += 1;
        } else {
            s_hash[s_array[i]] = 1;
        }
        if (t_hash[t_array[i]]) {
            t_hash[t_array[i]] += 1;
        } else {
            t_hash[t_array[i]] = 1;
        }
    }
    for (const [key, value] of Object.entries(s_hash)) {
        if (key in t_hash && t_hash[key] == value) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

let s = 'anagram';
let t = 'nagaram';
console.log(solution(s, t));
