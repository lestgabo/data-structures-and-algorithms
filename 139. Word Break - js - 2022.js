/**
 ** 139. Word Break
 ** Medium
 ** https://leetcode.com/problems/word-break/
 * 
Given a string s and a dictionary of strings wordDict, return true if s can be 
segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 
Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

 
Constraints:

    1 <= s.length <= 300
    1 <= wordDict.length <= 1000
    1 <= wordDict[i].length <= 20
    s and wordDict[i] consist of only lowercase English letters.
    All the strings of wordDict are unique.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

 const wordBreak = (s, wordDict) => {
     /**
      * - use BFS -> more understandable and more intuitive
      */
    const words = new Set(wordDict);
    const visited = new Set();
    const queue = [0];

    // queue is dynamically beeing added to by new starts if a word is found in dict
    while (queue.length) {
        // we can attempt to try starting from this new location
        const start = queue.shift();

        if (!visited.has(start)) {
            for (let end = start; end <= s.length; end++) {
                // console.log('s.slice(start, end): ' ,s.slice(start, end))
                // console.log('start: ', start)
                // console.log('end: ', end)
                // console.log('queue: ', queue)
                if (words.has(s.slice(start, end))) {
                    // full word wound found 
                    if (end === s.length) return true;
                    // full word not yet found, add end to queue to restart loop
                    queue.push(end);
                }
            }
        }
        visited.add(start);
    }
    return false;
};

// Input: s = "leetcode", wordDict = ["leet","code"]
// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Input: s = "penapple", wordDict = ["apple","pen"]
Input: s = "cars", wordDict = ["car","ca","rs"]
// Output: true

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

console.log(wordBreak(s, wordDict));

 /**
  * 
 35 / 45 test cases passed.
 "cars"
["car","ca","rs"]
  */
// const wordBreak = (s, wordDict) => {
//     let start = 0;
//     let end = s.length;

//     for (let i = 0; i < wordDict.length; i++) {
//         for (let j = 0; j < wordDict.length; j++) {
//             end = start + wordDict[j].length;
//             let currWord = s.slice(start, end);
//             let currDict = wordDict[j];
//             // console.log('curr word: ', currWord)
//             // console.log('curr dict: ', currDict)
//             // console.log('********')
//             if (currWord === currDict) {
//                 start += currDict.length;
//                 // console.log('start: ', start)
//                 // console.log('end: ', end)
//                 // console.log('start === end: ', start === end)
//                 // console.log('start != s.length: ', start != s.length)
//                 if (start === end && start === s.length) {
//                     return true;
//                 } else if (start === end && start != s.length) { 
//                     start = end;
//                     j = 0;
//                 } else {
//                     start = 0;
//                     break;
//                 }
//             }
//         }    
//     }
//     return false;
// };
