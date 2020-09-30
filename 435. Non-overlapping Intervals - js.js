/**
 * 435. Non-overlapping Intervals
Medium

Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

Example 1:

Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

Example 2:

Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

Example 3:

Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

 

Note:

    You may assume the interval's end point is always bigger than its start point.
    Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.

https://leetcode.com/problems/non-overlapping-intervals/
 */

/**
 *
 * @param {number[][]} intervals
 * @return {number} min number of intervals to remove
 */

const nonOverlappingIntervals = (intervals) => {
    if (intervals.length <= 1) return 0;

    let sortedIntervals = intervals.sort((a, b) => {
        return a[1] - b[1];
    });

    let prevEnd = sortedIntervals[0][1];
    let counter = 0;
    // console.log('start: ', sortedIntervals);
    for (let i = 1; i < sortedIntervals.length; i++) {
        let interval = sortedIntervals[i];

        // console.log('prevEnd ->', prevEnd);
        // console.log('interval[0] ->', interval[0]);
        // if current interval start is less than prev inteveral end, then overlap
        if (interval[0] < prevEnd) {
            counter++;
        } else {
            prevEnd = interval[1];
        }
    }

    return counter;
};

let intervals = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
];
console.log(nonOverlappingIntervals(intervals));
