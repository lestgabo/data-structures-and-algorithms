/**
 * 
 * 253. Meeting Rooms II
Medium

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2

Example 2:

Input: [[7,10],[2,4]]
Output: 1

NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

https://leetcode.com/problems/meeting-rooms-ii/
 */

// * merged intervals instead -> but broke it to try and switch to min meeting rooms
// const solution = (intervals) => {
//     let newRooms = [];
//     let prev_end = 0;
//     let roomsNeeded = 1;

//     // sort by ending times
//     intervals.sort((a, b) => {
//         return a[1] - b[1];
//     });

//     if (intervals.length !== 0) {
//         prev_end = -Number.MAX_VALUE;
//     } else {
//         return 0;
//     }

//     console.log('intervals ->', intervals);
//     for (let i = 0; i < intervals.length; i++) {
//         let [start, end] = intervals[i];

//         if (newRooms.length === 0) {
//             newRooms.push([start, end]);
//         }
//         console.log('start ->', start);
//         console.log('prev_end ->', prev_end);
//         console.log('start < prev_end', start < prev_end);
//         if (start < prev_end) {
//             // overlap, therefore need 1 more room
//             roomsNeeded++;
//             console.log('roomsNeeded -> ', roomsNeeded);
//             if (end > prev_end) {
//                 // update the end of previous room to be current end
//                 newRooms[newRooms.length - 1][1] = end;
//             }
//         }
//         // if start is greater than current newRoom's end
//         if (start > newRooms[newRooms.length - 1][1]) {
//             newRooms.push([start, end]);
//             roomsNeeded--;
//         }
//         prev_end = end;
//     }
//     console.log('newRooms ->', newRooms);
//     return roomsNeeded;
// };

const solution = (intervals) => {
    let starts = [];
    let ends = [];
    let rooms_needed = 0;

    // edge case
    if (intervals.length === 0) return 0;

    for (const nums of intervals) {
        starts.push(nums[0]);
        ends.push(nums[1]);
    }

    // sort
    const ascending = (a, b) => a - b;
    starts.sort(ascending);
    ends.sort(ascending);

    console.log('starts ->', starts);
    console.log('ends ->', ends);

    let end_pointer = 0;
    for (start_pointer in starts) {
        if (starts[start_pointer] < ends[end_pointer]) {
            rooms_needed++;
        }
        if (starts[start_pointer] >= ends[end_pointer]) {
            end_pointer++;
        }
    }

    return rooms_needed;
};

let intervals1 = [
    [0, 30],
    [5, 10],
    [15, 20],
];
let intervals2 = [
    [7, 10],
    [2, 4],
    [4, 7],
];
let intervals3 = [
    [7, 10],
    [2, 4],
];
// 1
let intervals = [
    [13, 15],
    [1, 13],
];
// 2
let intervals5 = [
    [9, 10],
    [4, 9],
    [4, 17],
];
// 2
let intervals6 = [
    [2, 11],
    [6, 16],
    [11, 16],
];
// let intervals = [
//     [0, 30],
//     [5, 10],
//     [15, 20],
// ];
console.log(solution(intervals));
