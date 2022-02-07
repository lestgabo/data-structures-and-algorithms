/**
 ** 49. Group Anagrams
 ** Medium
 ** https://leetcode.com/problems/group-anagrams/
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different
word or phrase, typically using all the original letters exactly once.


Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

 
Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = (strs) => {
    /**
     * keywords: Sort and Hash (Object in javascript)
     * 
     * - sort the word we are on and save that sorted string as a key in the hash
     * - if the key doesnt exist yet then add it on preferably as 
     *   a key to a value which is an array of anagram words
     * - then return the values of the hash/object as an array
     * - since we are storing the value as an array we just need to present the values
     *   and Object.values returns an array of values -> which is exactly what we need
     */
    let myHash = {};
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let sortedWord = word.split('').sort().join('');
        // console.log('word: ', word)
        // console.log('sorted: ', sortedWord)
        if (myHash[sortedWord]) {
            // console.log('already have')
            myHash[sortedWord].push(word)
        } else {
            myHash[sortedWord] = [word]
        }
        // console.log('*******')
    }

    // console.log('myHash: ', Object.values(myHash))
    return Object.values(myHash);
};


// const strs = ["eat","tea","tan","ate","nat","bat"]
// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
const strs = ["tan","nat","bat"]
// Output: [["bat"],["nat","tan"]]
   
console.log(groupAnagrams(strs));
