/**
 ** 1640. Check Array Formation Through Concatenation
 ** Easy
 ** https://leetcode.com/problems/check-array-formation-through-concatenation/
 ** https://leetcode.com/explore/featured/card/january-leetcoding-challenge-2021/579/week-1-january-1st-january-7th/3589/

You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

Return true if it is possible to form the array arr from pieces. Otherwise, return false.

 

Example 1:

Input: arr = [85], pieces = [[85]]
Output: true

Example 2:

Input: arr = [15,88], pieces = [[88],[15]]
Output: true
Explanation: Concatenate [15] then [88]

Example 3:

Input: arr = [49,18,16], pieces = [[16,18,49]]
Output: false
Explanation: Even though the numbers match, we cannot reorder pieces[0].

Example 4:

Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
Output: true
Explanation: Concatenate [91] then [4,64] then [78]

Example 5:

Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
Output: false

 

Constraints:

    1 <= pieces.length <= arr.length <= 100
    sum(pieces[i].length) == arr.length
    1 <= pieces[i].length <= arr.length
    1 <= arr[i], pieces[i][j] <= 100
    The integers in arr are distinct.
    The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).


 */

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
    /*
        use set
        save numbers inside arr into a set
        bring out the numbers inside pieces and add each into a second set 
        (given distinct integers so no same numbers)
        compare the two sets
        ^ not gonna work. cannot reorder pieces, a set would not care about order
        
        remove the numbers from both sides
        if number found in pieces, remove it from arr
        do singles first, if single number found in pieces, remove it from arr
        then do the arrays in pieces
        
        once arr is empty return true, 
        else after going through pieces and arr not empty then return false
    */
    // splice(start, number of elements to delete, insert)
    // console.log('arr: ', arr)
    let makeMeEmpty = [...arr];

    pieces.forEach((piece) => {
        // singles
        if (piece.length === 1) {
            let toRemove = piece[0];
            let toRemoveIndex = makeMeEmpty.indexOf(toRemove);

            // console.log('SINGLE***')

            if (toRemoveIndex === -1) {
                return;
            } else {
                makeMeEmpty.splice(toRemoveIndex, 1, 'good');
            }
        } else {
            let previousToRemoveIndex;
            piece.forEach((num) => {
                let toRemove = num;
                let toRemoveIndex = makeMeEmpty.indexOf(toRemove);

                //                 console.log('NOT SINGLE***')
                //                 console.log('makeMeEmpty', makeMeEmpty)
                //                 console.log('toRemove: ', toRemove)
                //                 console.log('toRemoveIndex: ', toRemoveIndex)
                //                 console.log('previousToRemoveIndex: ', previousToRemoveIndex)

                // if index not there (-1)
                if (toRemoveIndex === -1) return;

                // check if in-order between makeMeEmpty and pieces array
                if (previousToRemoveIndex === toRemoveIndex || previousToRemoveIndex === undefined) {
                    makeMeEmpty.splice(toRemoveIndex, 1, 'good');
                }

                // we are checking next index
                previousToRemoveIndex = toRemoveIndex + 1;
            });
        }
    });
    // console.log('makeMeEmpty outside: ', makeMeEmpty)

    let result = true;
    // made good numbers 'good' if there is a number left, then arr could not be formed
    makeMeEmpty.forEach((good) => {
        // console.log('good: ', good)
        // console.log('isNaN(good: ', isNaN(good))

        if (!isNaN(good)) result = false;
    });
    return result;
};

// let arr = [91, 4, 64, 78];
let arr = [91, 64, 4, 78];
let pieces = [[78], [4, 64], [91]];
console.log(canFormArray(arr, pieces));
