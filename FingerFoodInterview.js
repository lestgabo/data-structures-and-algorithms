let string = 'yellow';

// reverse string w/o using .reverse

const reverseString = text => {
    let result;
    let tempArray;
    let temp = [];
    tempArray = text.split('');
    // [Y e l l o w]
    // Split them first
    // tempArray[-1]
    for (let i = tempArray.length - 1; i >= 0; i--) {
        Temp = temp.push(tempArray[i]);
        // w o l l o y
    }
    result = temp.join('');
    return result;
};

console.log(reverseString(string));

const isPalindrome = word => {
    let reversedWord;
    let tempArray;
    let temp = [];
    tempArray = word.split('');
    // check first if last letter = first letter
    if (tempArray[0] != tempArray[tempArray.length - 1]) return false;

    for (let i = tempArray.length - 1; i >= 0; i--) {
        Temp = temp.push(tempArray[i]);
    }
    reversedWord = temp.join('');

    return word === reversedWord ? true : false;
};

let palindrome = 'racecard';
console.log(isPalindrome(palindrome));
