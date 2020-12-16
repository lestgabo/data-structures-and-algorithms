/**
 ** 252. Meeting Rooms
 ** Easy
 ** https://leetcode.com/problems/meeting-rooms/

Given an array of meeting time intervals consisting of start and 
end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false

Example 2:

Input: [[7,10],[2,4]]
Output: true

NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

https://leetcode.com/problems/meeting-rooms/
 */

const solution = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    // console.log(intervals)
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) return false;
    }
    return true;
};

// let intervals = [
//     [22, 27],
//     [2, 33],
// ];
// let intervals = [
//     [7, 10],
//     [2, 4],
// ];
let intervals = [
    [0, 3],
    [5, 10],
    [15, 20],
];
console.log(solution(intervals));
