/**
 ** 57. Insert Interval
 ** Medium
 ** https://leetcode.com/problems/insert-interval/


You are given an array of non-overlapping intervals intervals where 
intervals[i] = [starti, endi] represent the start and the end of the ith interval 
and intervals is sorted in ascending order by starti. 
You are also given an interval newInterval = [start, end] 
that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in 
ascending order by starti and intervals still does not have any 
overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.


Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


Constraints:

    0 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 105
    intervals is sorted by starti in ascending order.
    newInterval.length == 2
    0 <= start <= end <= 105
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

 const insert = (intervals, newInterval) => {
      // always integers
    // one new interval
    // already sorted by start
    
    // have a start and end variable because we are merging overlaps
    // but in this on each iteration we also have to check the start and end of the new interval
    // if not in proximity of new interval, just do normal algo for merging overlaps
    
    // trick is 
    
    // new appr - put the new interval in sorted manner into the intervals
    // why - 
    // how - go through intervals and check its start or 0 index and compare to know when to insert the new interval 
    // once the new interval is inserted, we can now do a merge interval algorithm to remove overlaps
    
    // step 1:
    // insert new into interval
    // - make a new array and go through intervals while checking its start
    // - if current start is lesser than newIntervals start we just push that interval into our new array
    // - once we find current start >, greater than, newInterval start, 
    // - we now insert the new interval by pushing it first then finally push the rest of the intervals
    
    // step 2:
    // merge overlap
    // ~~~
    
    let completeIntervals = [];
    let alreadyIn = false;
    
    // empty intervals
    if (Array.isArray(intervals) && !intervals.length) return [newInterval]
    
    // step 1
    for (let i = 0; i < intervals.length; i++) {
        // current start is lesser than newIntervals start we just push that interval into our new array
        if (intervals[i][0] < newInterval[0]) {
            completeIntervals.push(intervals[i])
        } else {
            if (!alreadyIn) {
                completeIntervals.push(newInterval);
                alreadyIn = !alreadyIn;
            }
            completeIntervals.push(intervals[i]);
        }
    }
    // if newInterval wasnt inserted we just add it in the end
    if (!alreadyIn) completeIntervals.push(newInterval)
    
    // console.log('completeIntervals: ', completeIntervals)
    
    // step 2
    let result = [];
    let start = completeIntervals[0][0];
    let end = completeIntervals[0][1];
    
    for (let i = 0; i < completeIntervals.length; i++) {
        let curr = completeIntervals[i];
        
        // console.log('start: ', start)
        // console.log('end: ', end)
        // console.log('curr: ', curr)
        
        // compare end with curr start
        if (end >= curr[0]) {
            // we only update if end IS NOT greater than curr[1] or current interval's end
            if (end < curr[1]) end = curr[1];
        } else {
            // push merged interval into result
            result.push([start, end]);
            start = curr[0];
            end = curr[1];
        }
        // if at last index just add current interval
        if (i === completeIntervals.length - 1) {
            result.push([start, end]);
        }
    }
    
    // console.log('res: ', result)
    
    return result;
};

Input: intervals = [[1,3],[6,9]], newInterval = [2,5] // Output: [[1,5],[6,9]]
// Input: intervals = [], newInterval = [2,5]
// Input: intervals = [[5,7]], newInterval = [2,5]
Input: intervals = [[8,10]], newInterval = [2,5]

console.log(insert(intervals, newInterval));

