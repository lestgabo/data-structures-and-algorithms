/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let tempHash = {};
    for (let i = 0; i < nums.length; i++) {
        if (tempHash[nums[i]]) {
            tempHash[nums[i]] += 1;
        } else {
            tempHash[nums[i]] = 1;
        }
    }
    // return tempHash.key where key value == 1
    return Object.keys(tempHash).find(key => tempHash[key] == 1);
};

let nums = [2, 2, 1, 1, 5, 6, 6, 44, 44];
console.log(singleNumber(nums));
