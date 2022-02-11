/**
 ** 56. Merge Intervals
 ** Medium
 ** https://leetcode.com/problems/merge-intervals/


Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.


Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

 
Constraints:

    1 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 104
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = (intervals) => {
    /**
     * - TRICK is to sort the array by its starts in ascending order
     * - we want the sort because we can then compare the current interval's start/end
     *   with the current merged start end. 
     * - we will need to use variables start and end and compare these values with
     *   the current index's interval start and end. updating end appropriately
     * - theres a tricky case when the end is greather than both current index's
     *   interval start and end. In that case, we just keep the end (overlaping the whole current interval)
     */

    let result = [];
    let N = intervals.length;

    // edge cases
    if (intervals.length === 1) return intervals;
    if (Array.isArray(intervals) && !intervals.length) return intervals;

    // sort by interval start
    intervals.sort((a, b) => a[0] - b[0])

    // initialize start and end for our temp merged
    let start = intervals[0][0];
    let end = intervals[0][1];

    // looking at current interval and before
    for (let i = 0; i < N; i++) {
        let curr = intervals[i];

        // console.log('start: ', start)
        // console.log('end: ', end)
        // console.log('curr: ', curr)
        // console.log('end >= curr[0]: ', end >= curr[0])
        // console.log('curr[1] > end: ', curr[1] > end)

        // merge overlap
        if (end >= curr[0]) {
            // if curr interval end is greater than end then we update end, else we keep the end
            if (curr[1] > end) end = curr[1];
        } else {
            // no more overlap, push the previous interval into result and update start and end
            result.push([start, end])
            start = curr[0];
            end = curr[1];
        }

        // console.log('start after: ', start)
        // console.log('end after: ', end)
        // console.log('*****************')

        // at last index, push whatever we have
        if (i === N - 1) {
            result.push([start, end]);
        }
    }
    return result;
};

// let intervals = [[15,18], [8,10], [1,3],[2,6]]
// let intervals = [[1,3],[2,6], [8,10], [15,18] ] // Output: [[1,6],[8,10],[15,18]]
// const intervals = [[1,4],[4,5]]
// const intervals = [[1,3]] 
// const intervals = [[1,4],[2,3]];
const intervals = [[1,10],[2,3],[4,5],[6,7],[8,9],]; // expected: [[1,10]]
// const intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]; // expected: [[1,10]]
// // Output: [[1,5]]
console.log(merge(intervals));

