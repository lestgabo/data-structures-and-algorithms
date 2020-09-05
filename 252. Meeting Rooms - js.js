/**
 * 252. Meeting Rooms
Easy

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

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
    let minimum = Number.MAX_VALUE;
    let maximum = -Number.MAX_VALUE;

    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    console.log('intervals ->', intervals);
    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i];
        // console.log('start ->', start);
        // console.log('end ->', end);
        if (start < maximum) return false;
        minimum = Math.min(minimum, start);
        maximum = Math.max(maximum, end);
    }
    // console.log('minimum ->', minimum);
    // console.log('maximum ->', maximum);

    return true;
};

let intervals = [
    [22, 27],
    [2, 33],
];
// let intervals = [
//     [7, 10],
//     [2, 4],
// ];
// let intervals = [
//     [0, 30],
//     [5, 10],
//     [15, 20],
// ];
console.log(solution(intervals));
