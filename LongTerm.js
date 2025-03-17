const globalArr = require('./PastDrawings').globalArr;

globalArr.length = 7486;

console.log(globalArr.length);

function findMissingNumbers(arr) {
    // Create a set of all possible numbers from "000" to "999"
    let allNumbers = new Set();
    for (let i = 0; i <= 999; i++) {
        allNumbers.add(i.toString().padStart(3, '0'));
    }

    // Convert the input array to a set for faster lookup
    let inputSet = new Set(arr);

    // Find missing numbers by checking which numbers are not in the input array
    let missingNumbers = [];
    for (let num of allNumbers) {
        if (!inputSet.has(num)) {
            missingNumbers.push(num);
        }
    }

    return missingNumbers;
}

console.log(findMissingNumbers(globalArr));

console.log('---------------------------');

// let result = findMissingNumbers(globalArr);

// while(result.length < 5)
// {
//     globalArr.length = globalArr.length - 1;
//     result = findMissingNumbers(globalArr);
// }

// console.log(globalArr.length);
// console.log(result);

// console.log('---------------------------');

function findMostRecurringNumbers(arr) {
    // Step 1: Create a frequency map
    const frequencyMap = {};

    // Count occurrences of each number
    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Step 2: Find the maximum frequency
    let maxFrequency = 0;
    for (let count of Object.values(frequencyMap)) {
        if (count > maxFrequency) {
            maxFrequency = count;
        }
    }

    // Step 3: Find all numbers with the maximum frequency
    const mostRecurringNumbers = [];
    for (let num in frequencyMap) {
        if (frequencyMap[num] === maxFrequency) {
            mostRecurringNumbers.push({ number: num, count: frequencyMap[num] });
        }
    }

    return mostRecurringNumbers;
}


console.log(findMostRecurringNumbers(globalArr));
