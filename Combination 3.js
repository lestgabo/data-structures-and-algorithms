const combination = (nums) => {
    let target = nums.slice(0, 1);
    let toCombine = nums.slice(1, nums.length);
    let bigArray = [[]];
    let answer = [];

    for (num of toCombine) {
        // Array.from creates new shallow-copied array
        let tempList = Array.from(bigArray);
        for (let j = 0; j < tempList.length; j++) {
            // push and + are trash in javascript arrays
            tempList[j] = tempList[j].concat([num]);
            bigArray = bigArray.concat([tempList[j]]);
        }
    }

    for (nums of bigArray) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        if (nums.reduce(reducer, 0) == target) {
            answer = answer.concat([nums]);
        }
    }
    return answer;
};

console.log(combination([9, 2, 3, 4, 5]));
